export default {
  async fetch(request, env, ctx) {
    const html = `
      <!DOCTYPE html>
      <html lang="zh">
      <head>
        <meta charset="UTF-8">
        <title>安全检查中</title>
        <style>
          body {
            font-family: "Microsoft YaHei", sans-serif;
            background-color: #f2f2f2;
            text-align: center;
            padding: 50px;
          }
          .box {
            background: white;
            border: 1px solid #ccc;
            padding: 30px;
            border-radius: 10px;
            display: inline-block;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .footer {
            font-size: small;
            color: #888;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>安全检查中</h1>
          <p>请稍等片刻，为了确保是您本人访问本站，我们需要进行安全检查。</p>
          <p>验证完成后将自动跳转。</p>
          <div class="footer">Ray ID: 模拟显示</div>
        </div>
      </body>
      </html>
    `;
    return new Response(html, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }
}
