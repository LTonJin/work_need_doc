// let eleFile = document.querySelector('#file');
// 读取文件对象
function zip_img(e) {
  let zip_file = null;
  let reader = new FileReader();
  // 新建图片对象（<img/>）
  let img = new Image();

  let file = null;
  // 缩放图片所需要的canvas
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  let promise = new Promise(resolve => {
    img.onload = function () {
      // debugger
      // 图片原始尺寸
      var originWidth = this.width;
      var originHeight = this.height;
      // 最大尺寸限制
      var maxWidth = 800,
        maxHeight = 800;
      // 目标尺寸
      var targetWidth = originWidth,
        targetHeight = originHeight;
      // 图片尺寸超过400x400的限制
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
          // 更宽，按照宽度限定尺寸
          targetWidth = maxWidth;
          targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
          targetHeight = maxHeight;
          targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
      }

      // canvas对图片进行缩放
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      // 清除画布
      context.clearRect(0, 0, targetWidth, targetHeight);
      // 图片压缩
      context.drawImage(img, 0, 0, targetWidth, targetHeight);


      // document.querySelector('#default_img').src = canvas.toDataURL();
      // console.log(canvas.toDataURL());
      function dataURLtoFile(dataurl, filename) { //将base64转换为文件
        var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {
          type: mime
        });
      }
      dataURLtoFile(canvas.toDataURL(), 'file')
      canvas.toBlob(function (Blod) {
        // debugger;
        zip_file = Blod;
        // 将Blob对象添加到formData
      })
      // console.log(dataURLtoFile(canvas.toDataURL(), 'file') );
      resolve(dataURLtoFile(canvas.toDataURL(), 'file.jpeg') );

    }

    // 文件base64化，以便获知图片原始尺寸

    // e.addEventListener('change', function (event) {
    file = e.files[0];
    // 选择的文件是图片
    // if (file.type.indexOf("file") == 0) {
    reader.readAsDataURL(file);
    reader.onload = function (b) {
      img.src = b.target.result;
      // console.log( img );
      // document.body.appendChild( img )
    };
    // }
    // });
    // console.log(zip_file);
  });
  // base64地址图片加载完毕后

  return promise;
}

export default {
  zip_img
};
