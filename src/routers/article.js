const article = async (ctx) => {
  console.log("详情", ctx.params.id, ctx.req.query);
  await ctx.render("article", {
    article: {
      title: "自建网站01",
      pageviews: "9999",
      createTime: "2023-06-08 13:13:13",
      labels: ["JavaScript", "vue"],
      content: `
    <blockquote><p>从0-1搭建一个属于自己的网站。</p></blockquote>
    <h2>购买服务器</h2>
    <ol>
      <li>
        <p>阿里云购买云服务器。</p>
        <p>
          <img
            src="http://beizong-images.oss-cn-chengdu.aliyuncs.com/bestshi.com_2023-06-11_18-33-56.png?x-oss-process=style/watermark"
            referrerpolicy="no-referrer"
            alt="bestshi.com_2023-06-11_18-33-56"
          />
        </p>
      </li>
      <li>
        <p>复制服务器IP。</p>
        <p>
          <img
            src="http://beizong-images.oss-cn-chengdu.aliyuncs.com/bestshi.com_2023-06-11_18-37-31.png?x-oss-process=style/watermark"
            referrerpolicy="no-referrer"
            alt="bestshi.com_2023-06-11_18-37-31"
          />
        </p>
      </li>
    </ol>
    <h2>注册域名</h2>
    <blockquote><p>域名以 eici.cc 为例。</p></blockquote>
    <ol>
      <li>
        <p>在阿里云注册自己喜欢的域名，然后再域名列表找到刚刚注册的域名。</p>
        <p>
          <img
            src="http://beizong-images.oss-cn-chengdu.aliyuncs.com/bestshi.com_2023-06-11_18-52-40.png?x-oss-process=style/watermark"
            referrerpolicy="no-referrer"
            alt="bestshi.com_2023-06-11_18-52-40"
          />
        </p>
      </li>
      <li>
        <p>添加域名解析。</p>
        <blockquote><p>添加一条 @ 和 www 的A记录。</p></blockquote>
        <p>
          <img
            src="http://beizong-images.oss-cn-chengdu.aliyuncs.com/bestshi.com_2023-06-11_18-55-05.png?x-oss-process=style/watermark"
            referrerpolicy="no-referrer"
            alt="bestshi.com_2023-06-11_18-55-05"
          />
        </p>
      </li>
      <li>
        <p>
          添加成功以后，使用终端ping一下域名看是否解析成功。看到返回说明解析成功。
        </p>
        <p>
          <img
            src="http://beizong-images.oss-cn-chengdu.aliyuncs.com/bestshi.com_2023-06-11_18-57-07.png?x-oss-process=style/watermark"
            referrerpolicy="no-referrer"
            alt="bestshi.com_2023-06-11_18-57-07"
          />
        </p>
      </li>
      <li>
        <p>现在，网站已经完成80%，把网站部署完成以后就能正常访问。</p>
        <p>&nbsp;</p>
      </li>
    </ol>
    <h2>服务器安装nginx</h2>
    <blockquote><p>操作系统：Debian 11.6</p></blockquote>
    <ol>
      <li>
        <p>更新操作系统</p>
        <pre><code class='language-shell' lang='shell'>sudo apt update
sudo apt upgrade
</code></pre>
      </li>
      <li>
        <p>安装必要的组件。</p>
        <pre><code class='language-shell' lang='shell'>sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring
</code></pre>
      </li>
      <li>
        <p>导入nginx 签名密钥。</p>
        <pre><code class='language-shell' lang='shell'>curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg &gt;/dev/null
</code></pre>
      </li>
      <li>
        <p>验证密钥是否正确。</p>
        <pre><code class='language-shell' lang='shell'>gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
</code></pre>
        <p>输出结果如下：</p>
        <pre><code class='language-shell' lang='shell'>pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
    573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key &lt;signing-key@nginx.com&gt;
</code></pre>
      </li>
      <li>
        <p>设置稳定的 nginx 包 apt 存储库。</p>
        <pre><code class='language-shell' lang='shell'>echo &quot;deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian 'lsb_release -cs' nginx&quot; \
  | sudo tee /etc/apt/sources.list.d/nginx.list
</code></pre>
      </li>
      <li>
        <p>更新包信息。</p>
        <pre><code class='language-shell' lang='shell'>apt update
</code></pre>
      </li>
      <li>
        <p>安装nginx。</p>
        <pre><code class='language-shell' lang='shell'>apt install nginx
</code></pre>
      </li>
      <li>
        <p>修改配置文件。</p>
        <pre><code class='language-shell' lang='shell'>vim /etc/nginx/conf.d/default.conf
# 把 localhost 改成 eici.cc www.eici.cc
</code></pre>
      </li>
      <li>
        <p>启动nginx。</p>
        <pre><code class='language-shell' lang='shell'>systemctl start nginx
</code></pre>
      </li>
      <li>
        <p>到这应该能正常访问到如下页面了。</p>
        <p>
          <img
            src="http://beizong-images.oss-cn-chengdu.aliyuncs.com/bestshi.com_2023-06-11_20-26-37.png?x-oss-process=style/watermark"
            referrerpolicy="no-referrer"
            alt="bestshi.com_2023-06-11_20-26-37"
          />
        </p>
      </li>
      <li>
        <p>如果无法访问网页，在服务器的安全组里面放行80和443端口。</p>
        <p>
          <img
            src="http://beizong-images.oss-cn-chengdu.aliyuncs.com/image-20230611230358525.png?x-oss-process=style/watermark"
            referrerpolicy="no-referrer"
            alt="image-20230611230358525"
          />
        </p>
      </li>
    </ol>
    <p>&nbsp;</p>
    <p>至此，一个最基本的网站就搭建完成了。</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h3>算术运算符</h3>
    <figure class="table-figure">
      <table>
        <thead>
          <tr>
            <th>运算符</th>
            <th>描述</th>
            <th>作用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+</td>
            <td>加法运算符</td>
            <td>计算两个值或表达式的和</td>
          </tr>
          <tr>
            <td>-</td>
            <td>减法运算符</td>
            <td>计算两个值或表达式的差</td>
          </tr>
          <tr>
            <td>*</td>
            <td>乘法运算符</td>
            <td>计算两个值或表达式的乘积</td>
          </tr>
          <tr>
            <td>/ 或 DIV</td>
            <td>除法运算符</td>
            <td>计算两个值或表达式的商</td>
          </tr>
          <tr>
            <td>% 或 MOD</td>
            <td>取余运算符</td>
            <td>计算两个值或表达式的余数</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <ul>
      <li>一个整数类型的值对整数进行加法和减法操作，结果还是一个整数；</li>
      <li>一个整数类型的值对浮点数进行加法和减法操作，结果是一个浮点数；</li>
      <li>
        加法和减法的优先级相同，进行先加后减操作与进行先减后加操作的结果是一样的；
      </li>
      <li>
        如果遇到非数值类型，先尝试转成数值，如果转失败，就按0计算。（补充：MySQL
        中字符串拼接要使用字符串函数CONCAT()实现）；
      </li>
      <li>一个数乘以整数1和除以整数1后仍得原数；</li>
      <li>一个数乘以浮点数1和除以浮点数1后变成浮点数，数值与原数相等；</li>
      <li>一个数除以整数后，不管是否能除尽，结果都为一个浮点数；</li>
      <li>
        一个数除以另一个数，除不尽时，结果为一个浮点数，并保留到小数点后4位；
      </li>
      <li>
        乘法和除法的优先级相同，进行先乘后除操作与先除后乘操作，得出的结果相同；
      </li>
      <li>在数学运算中，0不能用作除数，在MySQL中，一个数除以0为NULL；</li>
    </ul>`,
    },
    lang: "zh-CN",
  });
};

export default article;
