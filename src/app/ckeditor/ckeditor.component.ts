import { Component, OnInit } from '@angular/core';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {

  // ckeditor配置信息
  public Ckeditor = {
    el: ClassicEditor,
    data: '',
    config: {
      // 占位符
      placeholder: 'Type the content here!',
      // 设置语言
      language: 'zh-cn',

      // 配置文件管理
      ckfinder: {
        // tokenUrl: 'http://127.0.0.1:3000/token',
        uploadUrl: 'http://127.0.0.1:3000/upload'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  /**
   * 内容变化后触发
   * @param param0 ckeditor组件
   */
  public onChange({ editor }: ChangeEvent) {
    // const data = editor.getData();

    // console.log(data);
  }
}
