import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn.js';

@Component({
  selector: 'app-ckeditor-pt',
  templateUrl: './ckeditor-pt.component.html',
  styleUrls: ['./ckeditor-pt.component.css']
})
export class CkeditorPtComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    ClassicEditor
      .create(document.querySelector('#editor'), {
        language: 'zh-cn',
        ckfinder: {
          options: {
            resourceType: 'Images'
          },
          // tokenUrl: 'http://127.0.0.1:3000/token',
          uploadUrl: 'http://127.0.0.1:3000/upload'
        }
      })
      .then(editor => {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
          return {
            upload: () => {
              return new Promise((resolve, reject) => {
                const data = new FormData();
                data.append('file', loader.file);
                data.append('allowSize', '10'); // 允许图片上传的大小/兆

                // tslint:disable-next-line:variable-name
                const _url = 'http://127.0.0.1:3000/upload';
                this.http.post(_url, data).subscribe(json => {
                  resolve(json);
                });
              });
            }
          };
        };
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  }

}
