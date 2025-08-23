import { units } from "./setData.js";

console.log(units);
const params = new URLSearchParams(window.location.search);
const unit = params.get("unit");
const heading = document.querySelector("#heading");
const desc = document.querySelector("#desc");
const content = document.querySelector("#content");

heading.innerHTML = `Lý thuyết Chủ đề ${unit}`;
desc.innerHTML = `${units[unit - 1].name}`;

const data = {
  unit1: `<main>
    <section>
      <h2 class="font-bold text-xl mb-3">1. Phương trình bậc nhất hai ẩn</h2>
      <div class="pl-8">
        <p><strong>Định nghĩa:</strong> Phương trình dạng <code>ax + by = c</code> với <code>a, b, c</code> là số thực và <code>(a, b) ≠ (0, 0)</code>.</p>
        <p><strong>Nghiệm:</strong> Là cặp số <code>(x, y)</code> thỏa phương trình. Đồ thị của phương trình là một đường thẳng trên mặt phẳng tọa độ.</p>

        <h3 class="font-bold text-lg mb-3">Ví dụ</h3>
        <pre class="pl-8">2x + 3y = 6
Chọn x = 0 ⇒ y = 2
Chọn y = 0 ⇒ x = 3
Hai điểm (0,2) và (3,0) xác định đường thẳng.</pre>
      </div>
    </section>

    <section>
      <h2 class="font-bold text-xl mb-3">2. Hệ hai phương trình bậc nhất hai ẩn</h2>
      <div class="pl-8">
        <p><strong>Dạng tổng quát:</strong></p>
        <pre class="pl-8">
a₁x + b₁y = c₁
a₂x + b₂y = c₂
        </pre>

        <p><strong>Nghiệm của hệ</strong> là cặp <code>(x, y)</code> thỏa đồng thời cả hai phương trình — về hình học là giao điểm của hai đường thẳng.</p>

        <h3 class="font-bold text-lg mb-3">Phân loại nghiệm (nhanh)</h3>
        <ul class="pl-8 list-disc">
          <li><strong>Một nghiệm duy nhất:</strong> <code>a₁/a₂ ≠ b₁/b₂</code> (hai đường thẳng cắt nhau).</li>
          <li><strong>Vô số nghiệm:</strong> <code>a₁/a₂ = b₁/b₂ = c₁/c₂</code> (hai đường thẳng trùng nhau).</li>
          <li><strong>Vô nghiệm:</strong> <code>a₁/a₂ = b₁/b₂ ≠ c₁/c₂</code> (hai đường thẳng song song, khác nhau).</li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="font-bold text-xl mb-3">3. Các phương pháp giải chính</h2>
      <div class="pl-8">
        <h3 class="font-bold text-lg mb-3">a) Phương pháp thế</h3>
        <p>Rút một ẩn từ một phương trình (ví dụ <code>x = ...</code>) rồi thế vào phương trình kia để tìm ẩn còn lại.</p>

        <h3 class="font-bold text-lg mb-3">b) Phương pháp khử (cộng đại số)</h3>
        <p>Nhân hai phương trình để tạo hệ số đối nhau cho một ẩn, sau đó cộng hoặc trừ để khử ẩn đó, giải ẩn còn lại rồi thế ngược.</p>

        <h3 class="font-bold text-lg mb-3">c) Quy tắc Cramer</h3>
        <p>Nếu <code>Δ = a₁b₂ − a₂b₁ ≠ 0</code> thì</p>
        <pre class="pl-8">x = (c₁b₂ − c₂b₁)/Δ
y = (a₁c₂ − a₂c₁)/Δ</pre>
      </div>
    </section>

    <section>
      <h2 class="font-bold text-xl mb-3">4. Ví dụ thực tế (mua đồ)</h2>
      <div class="pl-8">
        <p><strong>Bài toán:</strong> 2 vở và 3 bút hết 27k; 1 vở và 2 bút hết 17k. Tìm giá 1 vở = x (k), 1 bút = y (k).</p>
        <pre class="pl-8">
2x + 3y = 27
x  + 2y = 17
        </pre>
        <p><strong>Khử:</strong> Nhân phương trình thứ hai ×2 ⇒ 2x + 4y = 34.
(2x+4y) − (2x+3y) = 34 − 27 ⇒ y = 7. Thay vào x + 2·7 = 17 ⇒ x = 3.</p>
        <p><strong>Kết luận:</strong> Vở 3k, bút 7k.</p>
      </div>
    </section>

    <section>
      <h2 class="font-bold text-xl mb-3">5. Lưu ý &amp; lỗi thường gặp</h2>
      <div class="pl-8">
        <ul class="pl-8 list-disc">
          <li>Luôn kiểm tra điều kiện <code>(a, b) ≠ (0, 0)</code> cho phương trình bậc nhất hai ẩn.</li>
          <li>Chú ý dấu khi nhân và khi khử; dễ sai khi nhân để tạo hệ số.</li>
          <li>Khi Δ = 0, cần so sánh tỉ lệ để phân biệt vô nghiệm hay vô số nghiệm.</li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="font-bold text-xl mb-3">6. Bài tập ngắn</h2>
      <div class="pl-8">
        <ol class="pl-8 list-decimal">
          <li>Kiểm tra (x,y) = (1,2) có phải nghiệm của <code>3x − y = 1</code> không?</li>
          <li>Giải hệ: <pre class="pl-8">3x + 2y = 13
2x −  y = 1</pre></li>
          <li>Phân loại nghiệm (không cần giải) của hệ: <pre class="pl-8">2x + 4y = 6
x  + 2y = 3</pre></li>
        </ol>
      </div>
    </section>
  </main>`,
  unit2: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Dạng tổng quát của hệ</h2>
    <div class="pl-8">
      <pre>
a₁x + b₁y = c₁
a₂x + b₂y = c₂
      </pre>
      <p>Trong đó <code>(a₁, b₁)</code> và <code>(a₂, b₂)</code> không đồng thời bằng <code>(0, 0)</code>. 
      Nghiệm của hệ là cặp <code>(x, y)</code> thỏa đồng thời cả hai phương trình.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Các phương pháp giải</h2>
    <div class="pl-8">
      <h3 class="font-bold text-lg mb-3">a) Phương pháp thế</h3>
      <p>Rút một ẩn từ một phương trình rồi thế vào phương trình kia để tìm ẩn còn lại.</p>
      <pre>
Ví dụ:
2x + 3y = 13
x - 2y = -1

Từ x - 2y = -1 ⇒ x = -1 + 2y
Thế vào 2x + 3y = 13 ⇒ 2(-1+2y) + 3y = 13
⇒ 4y + 3y - 2 = 13 ⇒ 7y = 15 ⇒ y = 15/7
x = -1 + 2*(15/7) = 23/7
      </pre>

      <h3 class="font-bold text-lg mb-3">b) Phương pháp khử (cộng đại số)</h3>
      <p>Nhân để tạo hệ số đối nhau ở một ẩn, cộng/trừ hai phương trình để khử ẩn đó.</p>
      <pre>
Ví dụ:
2x + 3y = 27
x + 2y = 17

Nhân PT2 với 2 ⇒ 2x + 4y = 34
Lấy (2x+4y) - (2x+3y) ⇒ y = 7
Thay vào x + 2y = 17 ⇒ x = 3
      </pre>

      <h3 class="font-bold text-lg mb-3">c) Quy tắc Cramer</h3>
      <p>Dùng định thức để tính nghiệm nhanh khi hệ số "đẹp".</p>
      <pre>
Δ = a₁b₂ − a₂b₁
x = (c₁b₂ − c₂b₁) / Δ
y = (a₁c₂ − a₂c₁) / Δ
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Phân loại nghiệm</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li><strong>Một nghiệm duy nhất:</strong> <code>a₁/a₂ ≠ b₁/b₂</code></li>
        <li><strong>Vô số nghiệm:</strong> <code>a₁/a₂ = b₁/b₂ = c₁/c₂</code></li>
        <li><strong>Vô nghiệm:</strong> <code>a₁/a₂ = b₁/b₂ ≠ c₁/c₂</code></li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ thực tế</h2>
    <div class="pl-8">
      <p>2 vở + 3 bút = 27k; 1 vở + 2 bút = 17k.</p>
      <pre>
2x + 3y = 27
x + 2y = 17

Nhân PT2 với 2 ⇒ 2x + 4y = 34
Trừ PT1 ⇒ y = 7
Thế y = 7 vào PT2 ⇒ x = 3
      </pre>
      <p>Kết quả: vở 3k, bút 7k.</p>
    </div>
  </section>
</main>
`,
  unit3: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Lập hệ phương trình là phương pháp dùng hai hoặc nhiều phương trình để biểu diễn các điều kiện của bài toán, sau đó giải hệ để tìm các ẩn cần tìm.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Các bước giải</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li>Xác định các ẩn cần tìm (ví dụ: số vở, số bút, số tiền, số kg...).</li>
        <li>Biểu diễn các điều kiện của bài toán dưới dạng phương trình.</li>
        <li>Đặt tất cả phương trình thành một hệ phương trình.</li>
        <li>Giải hệ phương trình bằng phương pháp thế, khử hoặc Cramer.</li>
        <li>Kiểm tra nghiệm có phù hợp với bài toán (thường là nghiệm ≥ 0).</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Bài toán: Một cửa hàng bán vở và bút. 2 vở và 3 bút hết 27k; 1 vở và 2 bút hết 17k. Tìm giá 1 vở và 1 bút.</p>
      <pre class="pl-8">
Gọi x = giá 1 vở, y = giá 1 bút
Ta có hệ phương trình:
2x + 3y = 27
x  + 2y = 17
      </pre>
      <p>Giải hệ:</p>
      <pre class="pl-8">
Nhân PT2 với 2 ⇒ 2x + 4y = 34
Trừ PT1 ⇒ y = 7
Thế y = 7 vào PT2 ⇒ x = 3
      </pre>
      <p>Kết luận: Giá 1 vở = 3k, giá 1 bút = 7k.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Luôn xác định rõ các ẩn và đơn vị.</li>
        <li>Kiểm tra điều kiện thực tế, ví dụ số lượng và giá cả không âm.</li>
        <li>Đảm bảo các điều kiện bài toán được biểu diễn đầy đủ trong hệ phương trình.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit4: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Phương trình quy về phương trình bậc nhất một ẩn là phương trình ban đầu (có thể là bậc hai, bậc cao hơn, chứa dấu giá trị tuyệt đối, phân thức,...) được biến đổi để có dạng:</p>
      <pre class="pl-8">ax + b = 0, với a ≠ 0</pre>
      <p>Sau khi đưa về dạng này, ta có thể dễ dàng giải bằng cách:</p>
      <pre class="pl-8">x = -b / a</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Các bước giải</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li>Đưa tất cả hằng số về một vế, chứa ẩn về một vế.</li>
        <li>Rút gọn các hạng tử cùng loại.</li>
        <li>Chia cả hai vế cho hệ số của ẩn (khác 0) để tìm nghiệm.</li>
        <li>Kiểm tra điều kiện của bài toán nếu có (ví dụ giá trị trong căn, mẫu khác 0).</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Ví dụ 1: Giải phương trình</p>
      <pre class="pl-8">3x + 7 = 16
3x = 16 - 7
3x = 9
x = 9 / 3
x = 3</pre>

      <p>Ví dụ 2: Quy về phương trình bậc nhất một ẩn từ phương trình chứa phân thức:</p>
      <pre class="pl-8">(x + 2)/3 - (x - 1)/2 = 1
Nhân cả hai vế với 6 ⇒ 2(x + 2) - 3(x - 1) = 6
2x + 4 - 3x + 3 = 6
-x + 7 = 6
-x = -1
x = 1</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Luôn kiểm tra điều kiện mẫu nếu phương trình có phân thức.</li>
        <li>Đối với phương trình chứa căn, kiểm tra nghiệm có thỏa điều kiện dưới căn ≥ 0.</li>
        <li>Kiểm tra nghiệm cuối cùng bằng cách thay trở lại phương trình ban đầu.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit5: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Bất đẳng thức là mối quan hệ giữa hai biểu thức mà giá trị của chúng không bằng nhau, có thể lớn hơn hoặc nhỏ hơn. Ví dụ:</p>
      <pre class="pl-8">a > b  (a lớn hơn b)
a ≥ b (a lớn hơn hoặc bằng b)
a < b  (a nhỏ hơn b)
a ≤ b (a nhỏ hơn hoặc bằng b)</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Tính chất cơ bản của bất đẳng thức</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li><strong>Phép cộng:</strong> Nếu a > b, thì a + c > b + c với mọi c.</li>
        <li><strong>Phép trừ:</strong> Nếu a > b, thì a - c > b - c với mọi c.</li>
        <li><strong>Phép nhân:</strong>
          <ul class="pl-8 list-disc">
            <li>Nếu a > b và c > 0, thì a·c > b·c</li>
            <li>Nếu a > b và c < 0, thì a·c < b·c</li>
          </ul>
        </li>
        <li><strong>Phép chia:</strong>
          <ul class="pl-8 list-disc">
            <li>Nếu a > b và c > 0, thì a/c > b/c</li>
            <li>Nếu a > b và c < 0, thì a/c < b/c</li>
          </ul>
        </li>
        <li><strong>Bổ sung:</strong> Bất đẳng thức luôn có thể đảo chiều khi nhân hoặc chia với số âm.</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <pre class="pl-8">
Ví dụ 1:
5 > 3
Cộng 2 vào cả hai vế ⇒ 5 + 2 > 3 + 2 ⇒ 7 > 5

Ví dụ 2:
-4 < 2
Nhân -1 (số âm) ⇒ 4 > -2
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Luôn chú ý khi nhân hoặc chia hai vế với số âm, phải đảo chiều bất đẳng thức.</li>
        <li>Đối với bất đẳng thức chứa ẩn, cần kiểm tra điều kiện của ẩn (ví dụ mẫu khác 0).</li>
        <li>Sử dụng tính chất cộng, trừ, nhân, chia để biến đổi bất đẳng thức nhằm tìm nghiệm.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit6: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Bất phương trình bậc nhất một ẩn là bất phương trình có dạng:</p>
      <pre class="pl-8">ax + b > 0,  ax + b ≥ 0,  ax + b < 0,  ax + b ≤ 0  (a ≠ 0)</pre>
      <p>Nghiệm của bất phương trình là tập hợp các giá trị của <code>x</code> thỏa mãn mối quan hệ trên.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Phương pháp giải</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li>Đưa tất cả hằng số về một vế, chứa ẩn về vế kia.</li>
        <li>Chia cả hai vế cho hệ số của ẩn (chú ý đảo chiều nếu chia số âm).</li>
        <li>Viết nghiệm dưới dạng khoảng, ví dụ: <code>x > 3</code>, <code>x ≤ 5</code>.</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <pre class="pl-8">
Ví dụ 1:
2x - 5 > 3
2x > 8
x > 4

Ví dụ 2:
-3x + 7 ≤ 1
-3x ≤ -6
Chia -3 ⇒ x ≥ 2  (chú ý đổi chiều)
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Nhớ đảo chiều bất phương trình khi nhân hoặc chia hai vế với số âm.</li>
        <li>Kiểm tra điều kiện của ẩn nếu bất phương trình chứa mẫu hoặc căn.</li>
        <li>Viết nghiệm dưới dạng khoảng hoặc biểu thức miền giá trị để dễ hình dung.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit7: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm căn bậc hai</h2>
    <div class="pl-8">
      <p>Căn bậc hai của một số thực không âm <code>a</code> là số không âm <code>x</code> sao cho:</p>
      <pre class="pl-8">x² = a ⇒ x = √a</pre>
      <p>Ví dụ: √9 = 3, vì 3² = 9.</p>
      <p>Lưu ý: Căn bậc hai chỉ xác định với số không âm.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Khái niệm căn thức bậc hai</h2>
    <div class="pl-8">
      <p>Căn thức bậc hai là biểu thức có dạng:</p>
      <pre class="pl-8">√(ax² + bx + c)</pre>
      <p>Trong đó <code>ax² + bx + c ≥ 0</code> với mọi giá trị của ẩn để biểu thức có nghĩa thực.</p>
      <p>Ví dụ: √(x² - 4) xác định khi x² - 4 ≥ 0 ⇒ x ≥ 2 hoặc x ≤ -2.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Tính chất cơ bản</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>√(a·b) = √a · √b, với a ≥ 0, b ≥ 0</li>
        <li>√(a/b) = √a / √b, với a ≥ 0, b > 0</li>
        <li>√(a²) = |a|, với mọi số thực a</li>
        <li>√(x² + y²) ≥ 0</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <pre class="pl-8">
√16 = 4, vì 4² = 16
√(9x²) = 3|x|
√(x² - 4) xác định khi x ≤ -2 hoặc x ≥ 2
√(a·b) = √a · √b với a ≥ 0, b ≥ 0
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Luôn kiểm tra điều kiện để căn có nghĩa thực (thường là ≥ 0).</li>
        <li>Khi rút gọn căn, cần chú ý dấu giá trị tuyệt đối nếu chứa biến.</li>
        <li>Áp dụng tính chất căn bậc hai để biến đổi và giải phương trình hoặc bất phương trình.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit8: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Khai căn bậc hai là tìm giá trị của biểu thức căn, thường áp dụng các phép biến đổi để đơn giản hóa. Đặc biệt với phép nhân và phép chia, có thể áp dụng các tính chất cơ bản:</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Tính chất với phép nhân</h2>
    <div class="pl-8">
      <p>Nếu a ≥ 0 và b ≥ 0 thì:</p>
      <pre class="pl-8">√(a·b) = √a · √b</pre>
      <p>Ví dụ:</p>
      <pre class="pl-8">√(9·4) = √9 · √4 = 3 · 2 = 6</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Tính chất với phép chia</h2>
    <div class="pl-8">
      <p>Nếu a ≥ 0 và b > 0 thì:</p>
      <pre class="pl-8">√(a/b) = √a / √b</pre>
      <p>Ví dụ:</p>
      <pre class="pl-8">√(25/9) = √25 / √9 = 5 / 3</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Các số trong căn phải không âm để phép khai căn có nghĩa thực.</li>
        <li>Chú ý chia cho số khác 0 khi áp dụng tính chất với phép chia.</li>
        <li>Những tính chất này giúp rút gọn căn bậc hai và giải phương trình hoặc bất phương trình chứa căn.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit9: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Biến đổi đơn giản và rút gọn biểu thức chứa căn bậc hai là quá trình sử dụng các tính chất của căn để viết lại biểu thức ngắn gọn, dễ tính toán hơn.</p>
      <p>Mục tiêu là đưa biểu thức về dạng <code>a√b</code> với <code>a</code> là số nguyên hoặc phân số, <code>b</code> là số không có căn bậc hai hoàn hảo.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Các bước rút gọn</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li>Phân tích số dưới căn thành tích các số, trong đó có thể tách các căn bậc hai hoàn hảo.</li>
        <li>Sử dụng tính chất <code>√(a·b) = √a · √b</code> để tách căn.</li>
        <li>Rút gọn các căn bậc hai hoàn hảo.</li>
        <li>Kết hợp các hệ số lại để được biểu thức ngắn gọn.</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <pre class="pl-8">
Ví dụ 1:
√50 = √(25·2) = √25 · √2 = 5√2

Ví dụ 2:
√72 = √(36·2) = √36 · √2 = 6√2

Ví dụ 3:
√18 / √2 = √(18/2) = √9 = 3
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Luôn tách các số dưới căn thành tích có thể rút gọn.</li>
        <li>Chỉ rút gọn căn bậc hai với các số không âm.</li>
        <li>Sử dụng các tính chất √(a·b) và √(a/b) để rút gọn nhanh.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit10: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm căn bậc ba</h2>
    <div class="pl-8">
      <p>Căn bậc ba của một số thực <code>a</code> là số <code>x</code> sao cho:</p>
      <pre class="pl-8">x³ = a ⇒ x = ∛a</pre>
      <p>Ví dụ: ∛8 = 2 vì 2³ = 8, ∛(-27) = -3 vì (-3)³ = -27.</p>
      <p>Lưu ý: Căn bậc ba xác định với mọi số thực, không chỉ số không âm.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Khái niệm căn thức bậc ba</h2>
    <div class="pl-8">
      <p>Căn thức bậc ba là biểu thức có dạng:</p>
      <pre class="pl-8">∛(ax³ + bx² + cx + d)</pre>
      <p>Trong đó biểu thức dưới căn có thể nhận mọi giá trị thực, khác với căn bậc hai.</p>
      <p>Ví dụ: ∛(x³ - 8) xác định với mọi x.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Tính chất cơ bản</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>∛(a·b) = ∛a · ∛b với mọi số thực a, b</li>
        <li>∛(a/b) = ∛a / ∛b với b ≠ 0</li>
        <li>∛(a³) = a với mọi số thực a</li>
        <li>∛(x³ + y³) ≠ ∛(x³) + ∛(y³) (không giống căn bậc hai)</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <pre class="pl-8">
∛27 = 3 vì 3³ = 27
∛(-64) = -4 vì (-4)³ = -64
∛(8·27) = ∛8 · ∛27 = 2 · 3 = 6
∛(125/8) = ∛125 / ∛8 = 5 / 2
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Căn bậc ba có thể tính với mọi số thực, không cần điều kiện ≥ 0.</li>
        <li>Áp dụng tính chất nhân và chia để rút gọn biểu thức chứa căn bậc ba.</li>
        <li>Không thể áp dụng trực tiếp tính chất √(a+b) như căn bậc hai cho căn bậc ba.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit11: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Tỉ số lượng giác của một góc nhọn trong tam giác vuông là các tỉ số giữa các cạnh của tam giác vuông đó, xác định theo góc cần xét.</p>
      <p>Các tỉ số cơ bản: sin, cos, tan, cot.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Các tỉ số lượng giác cơ bản</h2>
    <div class="pl-8">
      <p>Cho tam giác vuông <code>ABC</code> vuông tại <code>C</code>, xét góc nhọn <code>A</code>:</p>
      <ul class="pl-8 list-disc">
        <li><strong>sin A:</strong> đối/huyền ⇒ <code>sin A = BC / AB</code></li>
        <li><strong>cos A:</strong> kề/huyền ⇒ <code>cos A = AC / AB</code></li>
        <li><strong>tan A:</strong> đối/kề ⇒ <code>tan A = BC / AC</code></li>
        <li><strong>cot A:</strong> kề/đối ⇒ <code>cot A = AC / BC</code></li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Quan hệ giữa các tỉ số</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li><code>tan A = sin A / cos A</code></li>
        <li><code>cot A = cos A / sin A</code></li>
        <li>Định lý Pythagore: <code>sin² A + cos² A = 1</code></li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Cho tam giác vuông ABC vuông tại C, AB = 5, AC = 3, BC = 4.</p>
      <pre class="pl-8">
sin A = BC / AB = 4 / 5
cos A = AC / AB = 3 / 5
tan A = BC / AC = 4 / 3
cot A = AC / BC = 3 / 4
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Các tỉ số chỉ áp dụng cho góc nhọn trong tam giác vuông.</li>
        <li>Nhớ quan hệ giữa sin, cos, tan, cot để biến đổi và giải bài tập nhanh hơn.</li>
        <li>Luôn kiểm tra các cạnh đối, cạnh kề và cạnh huyền trước khi tính tỉ số.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit12: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Trong tam giác vuông, các cạnh và góc nhọn có mối quan hệ chặt chẽ với nhau. Các hệ thức này giúp tính toán các cạnh, góc, hoặc áp dụng giải bài toán thực tế.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Hệ thức cơ bản giữa cạnh và góc</h2>
    <div class="pl-8">
      <p>Cho tam giác vuông ABC vuông tại C, xét góc nhọn A:</p>
      <ul class="pl-8 list-disc">
        <li><strong>Định nghĩa tỉ số lượng giác:</strong>
          <ul class="pl-8 list-disc">
            <li><code>sin A = đối / huyền = BC / AB</code></li>
            <li><code>cos A = kề / huyền = AC / AB</code></li>
            <li><code>tan A = đối / kề = BC / AC</code></li>
            <li><code>cot A = kề / đối = AC / BC</code></li>
          </ul>
        </li>
        <li><strong>Định lý Pythagore:</strong> <code>AB² = AC² + BC²</code></li>
        <li><strong>Hệ thức cạnh góc:</strong>
          <ul class="pl-8 list-disc">
            <li>AC = AB · cos A</li>
            <li>BC = AB · sin A</li>
            <li>BC = AC · tan A</li>
            <li>AC = BC · cot A</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tính chiều cao, cạnh huyền, hoặc cạnh góc nhọn khi biết một cạnh và một góc.</li>
        <li>Tính khoảng cách, độ cao trong thực tế, ví dụ chiều cao của cột điện, tòa nhà.</li>
        <li>Giải các bài toán vận dụng như khoảng cách, độ nghiêng, hoặc bài toán chuyển động trên mặt phẳng nghiêng.</li>
      </ul>
      <p>Ví dụ:</p>
      <pre class="pl-8">
Cho tam giác vuông AB = 10 m, góc A = 30°
AC = AB · cos A = 10 · (√3 / 2) ≈ 8.66 m
BC = AB · sin A = 10 · (1/2) = 5 m
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Góc phải là góc nhọn trong tam giác vuông để áp dụng các tỉ số lượng giác cơ bản.</li>
        <li>Kiểm tra đơn vị đo khi áp dụng thực tế (mét, cm, km…).</li>
        <li>Luôn sử dụng định lý Pythagore để kiểm tra kết quả tính toán các cạnh.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit13: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm đường tròn</h2>
    <div class="pl-8">
      <p>Đường tròn là tập hợp tất cả các điểm trong mặt phẳng cách đều một điểm cố định gọi là tâm.</p>
      <p>Kí hiệu:</p>
      <ul class="pl-8 list-disc">
        <li>Tâm: <code>O</code></li>
        <li>Bán kính: <code>R</code> (khoảng cách từ tâm đến mọi điểm trên đường tròn)</li>
      </ul>
      <p>Định nghĩa: Nếu <code>P</code> là điểm trên đường tròn tâm <code>O</code> bán kính <code>R</code>, thì <code>OP = R</code>.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Thành phần của đường tròn</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li><strong>Tâm:</strong> điểm cố định <code>O</code></li>
        <li><strong>Bán kính:</strong> đoạn thẳng từ tâm đến một điểm trên đường tròn</li>
        <li><strong>Đường kính:</strong> đoạn thẳng đi qua tâm nối hai điểm trên đường tròn, bằng 2 lần bán kính</li>
        <li><strong>Dây cung:</strong> đoạn thẳng nối hai điểm bất kì trên đường tròn</li>
        <li><strong>Hình quạt:</strong> phần diện tích giới hạn bởi hai bán kính và cung giữa chúng</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Phương trình đường tròn</h2>
    <div class="pl-8">
      <p>Trong mặt phẳng tọa độ Oxy, đường tròn tâm <code>(a, b)</code> bán kính <code>R</code> có phương trình:</p>
      <pre class="pl-8">(x - a)² + (y - b)² = R²</pre>
      <p>Trường hợp đường tròn tâm tại gốc tọa độ <code>(0,0)</code>:</p>
      <pre class="pl-8">x² + y² = R²</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Đường tròn tâm O(2,3) bán kính 5:</p>
      <pre class="pl-8">(x - 2)² + (y - 3)² = 25</pre>
      <p>Đường tròn tâm gốc tọa độ bán kính 4:</p>
      <pre class="pl-8">x² + y² = 16</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Bán kính luôn dương.</li>
        <li>Mọi điểm trên đường tròn cách đều tâm.</li>
        <li>Phương trình đường tròn dùng để giải các bài toán tọa độ, tìm giao điểm, tính khoảng cách.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit14: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm dây và cung</h2>
    <div class="pl-8">
      <p>Trong đường tròn:</p>
      <ul class="pl-8 list-disc">
        <li><strong>Dây cung:</strong> đoạn thẳng nối hai điểm bất kỳ trên đường tròn.</li>
        <li><strong>Cung:</strong> phần đường tròn nối hai điểm bất kỳ.</li>
      </ul>
      <p>Lưu ý: Một dây tạo thành hai cung, gọi là cung nhỏ và cung lớn.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Tính chất cơ bản</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Dây lớn nhất là đường kính.</li>
        <li>Dây và cung đối nhau: dây cố định xác định cung.</li>
        <li>Các dây bằng nhau thì cung tương ứng bằng nhau.</li>
        <li>Cung lớn hơn đi kèm với dây ngắn hơn nếu xét hai cung giữa cùng hai điểm.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Quan hệ giữa dây và tâm</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Đường thẳng nối tâm vuông góc với dây chia dây thành hai phần bằng nhau.</li>
        <li>Đường kính đi qua tâm và dây thì vuông góc với dây tại trung điểm dây.</li>
        <li>Các dây cách đều tâm sẽ bằng nhau.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Đường tròn tâm O bán kính 5 cm:</p>
      <ul class="pl-8 list-disc">
        <li>Dây AB = 6 cm, cung nhỏ AB được xác định bởi hai điểm A, B trên đường tròn.</li>
        <li>Đường kính CD = 10 cm là dây lớn nhất, chia đường tròn thành hai cung bằng nhau.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tính chiều dài cung, diện tích hình quạt.</li>
        <li>Giải các bài toán liên quan đến cung, dây, góc nội tiếp.</li>
        <li>Xác định khoảng cách từ tâm đến dây và tính các hình chiếu trong hình học.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit15: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Độ dài của cung tròn</h2>
    <div class="pl-8">
      <p>Cho đường tròn bán kính <code>R</code> và cung có số đo góc ở tâm là <code>α</code> (đo bằng độ):</p>
      <ul class="pl-8 list-disc">
        <li>Độ dài cung: <code>l = (α/360) × 2πR</code></li>
        <li>Nếu góc α tính bằng radian: <code>l = R × α</code></li>
      </ul>
      <p>Ví dụ: Đường tròn bán kính 6 cm, cung có góc 60°:</p>
      <pre class="pl-8">l = (60/360) × 2π·6 = (1/6) × 12π = 2π cm</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Diện tích hình quạt tròn</h2>
    <div class="pl-8">
      <p>Hình quạt tròn là phần diện tích giới hạn bởi hai bán kính và cung giữa chúng.</p>
      <ul class="pl-8 list-disc">
        <li>Diện tích hình quạt: <code>S = (α/360) × πR²</code> nếu α đo bằng độ</li>
        <li>Nếu α đo bằng radian: <code>S = (1/2) × R² × α</code></li>
      </ul>
      <p>Ví dụ: Bán kính 5 cm, góc 90°:</p>
      <pre class="pl-8">S = (90/360) × π·5² = (1/4) × 25π = 6.25π cm²</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Diện tích hình vành khuyên</h2>
    <div class="pl-8">
      <p>Hình vành khuyên là phần giữa hai đường tròn đồng tâm bán kính <code>R</code> và <code>r</code> (R > r).</p>
      <ul class="pl-8 list-disc">
        <li>Diện tích hình vành khuyên: <code>S = π(R² - r²)</code></li>
        <li>Nếu xét hình quạt vành khuyên có góc α (độ): <code>S = (α/360) × π(R² - r²)</code></li>
      </ul>
      <p>Ví dụ: R = 8 cm, r = 5 cm, góc 60°:</p>
      <pre class="pl-8">S = (60/360) × π(8² - 5²) = (1/6) × π(64 - 25) = (1/6) × 39π = 6.5π cm²</pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Đảm bảo góc α đo cùng đơn vị (độ hoặc radian) khi áp dụng công thức.</li>
        <li>Đối với hình vành khuyên, bán kính lớn phải lớn hơn bán kính nhỏ.</li>
        <li>Công thức này giúp giải các bài toán tính chiều dài cung, diện tích hình quạt hoặc hình vành khuyên trong thực tế.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit16: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Vị trí tương đối của đường thẳng và đường tròn mô tả mối quan hệ giữa một đường thẳng và một đường tròn trong mặt phẳng. Có ba trường hợp:</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Ba trường hợp vị trí tương đối</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li><strong>Đường thẳng cắt đường tròn:</strong> đường thẳng đi qua hai điểm của đường tròn.</li>
        <li><strong>Đường thẳng tiếp xúc đường tròn:</strong> đường thẳng chỉ đi qua một điểm của đường tròn (gọi là tiếp điểm).</li>
        <li><strong>Đường thẳng không cắt đường tròn:</strong> đường thẳng không đi qua bất kỳ điểm nào trên đường tròn.</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Điều kiện xác định vị trí</h2>
    <div class="pl-8">
      <p>Cho đường tròn tâm O(0,0) bán kính R và đường thẳng có phương trình <code>Ax + By + C = 0</code>:</p>
      <ul class="pl-8 list-disc">
        <li>Khoảng cách từ tâm O đến đường thẳng: <code>d = |Ax₀ + By₀ + C| / √(A² + B²)</code></li>
        <li>So sánh d với R:</li>
        <ul class="pl-8 list-disc">
          <li>d < R ⇒ đường thẳng cắt đường tròn tại hai điểm</li>
          <li>d = R ⇒ đường thẳng tiếp xúc đường tròn</li>
          <li>d > R ⇒ đường thẳng không cắt đường tròn</li>
        </ul>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Đường tròn tâm O(0,0) bán kính 5, đường thẳng y = 3:</p>
      <pre class="pl-8">
Khoảng cách từ O đến đường thẳng: d = |0 - 3| / √(0² + 1²) = 3
So sánh với R = 5:
d < R ⇒ đường thẳng cắt đường tròn tại hai điểm
      </pre>
      <p>Đường thẳng y = 5:</p>
      <pre class="pl-8">
d = 5 = R ⇒ tiếp xúc đường tròn tại điểm (0,5)
      </pre>
      <p>Đường thẳng y = 6:</p>
      <pre class="pl-8">
d = 6 > R ⇒ không cắt đường tròn
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Sử dụng công thức khoảng cách từ điểm đến đường thẳng để xác định vị trí tương đối.</li>
        <li>Áp dụng cho đường tròn bất kỳ bằng cách thay tọa độ tâm vào công thức.</li>
        <li>Hiểu rõ các trường hợp giúp giải các bài toán hình học liên quan đến tiếp tuyến và giao điểm.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit17: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Vị trí tương đối của hai đường tròn mô tả mối quan hệ giữa hai đường tròn trong mặt phẳng, dựa trên tâm và bán kính của chúng.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Các trường hợp vị trí tương đối</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li><strong>Hai đường tròn cắt nhau tại hai điểm:</strong> Khoảng cách giữa hai tâm <code>d</code> thỏa <code>|R1 - R2| < d < R1 + R2</code></li>
        <li><strong>Hai đường tròn tiếp xúc ngoài:</strong> <code>d = R1 + R2</code></li>
        <li><strong>Hai đường tròn tiếp xúc trong:</strong> <code>d = |R1 - R2|</code></li>
        <li><strong>Hai đường tròn tách rời (không cắt nhau):</strong> <code>d > R1 + R2</code></li>
        <li><strong>Hai đường tròn đồng tâm:</strong> <code>d = 0</code>, nếu bán kính khác nhau ⇒ tiếp xúc trong không xảy ra; nếu bằng nhau ⇒ trùng nhau hoàn toàn</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Công thức khoảng cách</h2>
    <div class="pl-8">
      <p>Cho hai đường tròn tâm <code>O1(x1, y1)</code> bán kính <code>R1</code> và <code>O2(x2, y2)</code> bán kính <code>R2</code>:</p>
      <pre class="pl-8">d = √((x2 - x1)² + (y2 - y1)²)</pre>
      <p>Dùng d để so sánh với <code>R1 + R2</code> và <code>|R1 - R2|</code> xác định vị trí tương đối.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Cho O1(0,0) bán kính 5, O2(8,0) bán kính 4:</p>
      <pre class="pl-8">
d = √((8-0)² + (0-0)²) = 8
R1 + R2 = 5 + 4 = 9
|R1 - R2| = |5 - 4| = 1
Vì 1 < 8 < 9 ⇒ hai đường tròn cắt nhau tại hai điểm
      </pre>

      <p>Đường tròn O3(0,0) bán kính 5, O4(10,0) bán kính 5:</p>
      <pre class="pl-8">
d = 10 = R3 + R4 = 5 + 5 ⇒ tiếp xúc ngoài
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Sử dụng đúng công thức khoảng cách giữa hai tâm để xác định vị trí.</li>
        <li>So sánh d với tổng và hiệu bán kính để xác định các trường hợp.</li>
        <li>Hiểu các vị trí tương đối giúp giải các bài toán giao điểm, tiếp tuyến và bài toán hình học phẳng khác.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit18: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Hàm số bậc hai y = ax² (a ≠ 0) là hàm số trong đó y phụ thuộc bình phương của x. Đồ thị của hàm số này là một parabol có đỉnh tại gốc tọa độ (0,0).</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Tính chất của hàm số</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Đồ thị là parabol với đỉnh tại gốc tọa độ (0,0).</li>
        <li>Hàm số chẵn: y(-x) = y(x) ⇒ đồ thị đối xứng qua trục Oy.</li>
        <li>Hướng mở của parabol:</li>
        <ul class="pl-8 list-disc">
          <li>a > 0 ⇒ mở lên</li>
          <li>a < 0 ⇒ mở xuống</li>
        </ul>
        <li>Giá trị y ≥ 0 nếu a > 0; y ≤ 0 nếu a < 0.</li>
        <li>Hàm số đồng biến trên khoảng <code>[0, +∞)</code> và nghịch biến trên <code>(-∞,0]</code> nếu a > 0; ngược lại nếu a < 0.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Đạo hàm và hệ số góc</h2>
    <div class="pl-8">
      <p>Đạo hàm: y' = 2ax. Hệ số góc của tiếp tuyến tại điểm x0 là 2ax0.</p>
      <p>Ví dụ: Tại x0 = 1, y' = 2a · 1 = 2a.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Hàm số y = 2x²:</p>
      <ul class="pl-8 list-disc">
        <li>Đồ thị mở lên vì a = 2 > 0.</li>
        <li>Đỉnh tại (0,0).</li>
        <li>Đồng biến trên [0, +∞), nghịch biến trên (-∞, 0].</li>
      </ul>
      <p>Hàm số y = -x²:</p>
      <ul class="pl-8 list-disc">
        <li>Đồ thị mở xuống vì a = -1 < 0.</li>
        <li>Đỉnh tại (0,0).</li>
        <li>Đồng biến trên (-∞,0], nghịch biến trên [0, +∞).</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Hàm số y = ax² là dạng đơn giản nhất của hàm bậc hai.</li>
        <li>Biết a giúp xác định hướng mở và độ dốc của parabol.</li>
        <li>Hiểu tính chất đối xứng giúp vẽ đồ thị nhanh chóng.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit19: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Phương trình bậc hai một ẩn là phương trình có dạng:</p>
      <pre class="pl-8">ax² + bx + c = 0, a ≠ 0</pre>
      <p>Trong đó <code>x</code> là ẩn, <code>a, b, c</code> là các hệ số thực và <code>a ≠ 0</code>.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Công thức nghiệm</h2>
    <div class="pl-8">
      <p>Cho phương trình <code>ax² + bx + c = 0</code>, đặt <code>Δ = b² - 4ac</code> (định thức hoặc biệt thức).</p>
      <ul class="pl-8 list-disc">
        <li>Δ > 0: phương trình có hai nghiệm phân biệt</li>
        <pre class="pl-8">x1 = (-b + √Δ) / (2a), x2 = (-b - √Δ) / (2a)</pre>
        <li>Δ = 0: phương trình có nghiệm kép</li>
        <pre class="pl-8">x = -b / (2a)</pre>
        <li>Δ < 0: phương trình vô nghiệm trong tập số thực</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <pre class="pl-8">
Ví dụ 1: x² - 5x + 6 = 0
Δ = (-5)² - 4·1·6 = 25 - 24 = 1 > 0
x1 = (5 + 1)/2 = 3, x2 = (5 - 1)/2 = 2

Ví dụ 2: x² - 4x + 4 = 0
Δ = (-4)² - 4·1·4 = 16 - 16 = 0
x = 4 / 2 = 2

Ví dụ 3: x² + x + 1 = 0
Δ = 1 - 4 = -3 < 0 ⇒ vô nghiệm thực
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Luôn kiểm tra hệ số a ≠ 0 trước khi áp dụng công thức.</li>
        <li>Δ (biệt thức) xác định số lượng nghiệm thực của phương trình.</li>
        <li>Có thể dùng phương pháp phân tích nhân tử nếu phương trình dễ phân tích.</li>
      </ul>
    </div>
  </section>
</main>
`,
  uni20: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Định lí Viète</h2>
    <div class="pl-8">
      <p>Cho phương trình bậc hai một ẩn:</p>
      <pre class="pl-8">ax² + bx + c = 0, a ≠ 0</pre>
      <p>Giả sử phương trình có hai nghiệm thực <code>x1</code> và <code>x2</code>. Khi đó định lí Viète phát biểu:</p>
      <ul class="pl-8 list-disc">
        <li>Tổng hai nghiệm: <code>x1 + x2 = -b / a</code></li>
        <li>Tích hai nghiệm: <code>x1 · x2 = c / a</code></li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Ứng dụng định lí Viète</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tìm tổng hoặc tích của hai nghiệm mà không cần giải phương trình.</li>
        <li>Viết phương trình bậc hai khi biết tổng và tích của hai nghiệm.</li>
        <li>Giải các bài toán thực tế liên quan đến hai số có tổng và tích xác định.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <pre class="pl-8">
Ví dụ 1: x² - 5x + 6 = 0
Tổng hai nghiệm: x1 + x2 = 5
Tích hai nghiệm: x1 · x2 = 6

Ví dụ 2: Xây dựng phương trình khi biết tổng = 7 và tích = 10
Phương trình: x² - (tổng)x + tích = 0 ⇒ x² - 7x + 10 = 0
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Định lí chỉ áp dụng khi phương trình có hai nghiệm thực.</li>
        <li>Hữu ích trong các bài toán cần nhanh chóng tìm tổng hoặc tích của nghiệm.</li>
        <li>Cũng có thể áp dụng cho phương trình có hệ số a ≠ 1 bằng cách chia cho a trước khi áp dụng định lí.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit21: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm</h2>
    <div class="pl-8">
      <p>Giải bài toán bằng cách lập phương trình là phương pháp tìm ẩn số bằng cách thiết lập phương trình dựa trên dữ kiện của bài toán, sau đó giải phương trình để tìm giá trị của ẩn.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Các bước giải</h2>
    <div class="pl-8">
      <ol class="pl-8 list-decimal">
        <li>Đọc kỹ đề bài, xác định ẩn số cần tìm, đặt ẩn (ví dụ <code>x</code>).</li>
        <li>Biểu diễn các dữ kiện của bài toán thành phương trình chứa ẩn số.</li>
        <li>Giải phương trình theo các phương pháp phù hợp (bậc nhất, bậc hai...).</li>
        <li>Kiểm tra nghiệm tìm được có thỏa mãn điều kiện của bài toán không.</li>
        <li>Viết kết quả trả lời đầy đủ theo đề bài.</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <p>Bài toán: Một số tăng 3 đơn vị thì được gấp đôi số đó. Tìm số đó.</p>
      <ol class="pl-8 list-decimal">
        <li>Đặt ẩn số: Gọi số cần tìm là <code>x</code>.</li>
        <li>Lập phương trình theo dữ kiện: <code>x + 3 = 2x</code></li>
        <li>Giải phương trình: <code>x + 3 = 2x ⇒ 3 = x ⇒ x = 3</code></li>
        <li>Kiểm tra: <code>3 + 3 = 6 = 2 × 3</code> đúng.</li>
        <li>Kết luận: Số cần tìm là 3.</li>
      </ol>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Cần đọc kỹ đề và hiểu mối quan hệ giữa các đại lượng trước khi lập phương trình.</li>
        <li>Đặt ẩn hợp lý để phương trình đơn giản và dễ giải.</li>
        <li>Luôn kiểm tra nghiệm cuối cùng thỏa mãn điều kiện thực tế của bài toán.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit22: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Bảng tần số</h2>
    <div class="pl-8">
      <p>Bảng tần số là bảng biểu diễn số lần xuất hiện (tần số) của các giá trị trong một tập dữ liệu.</p>
      <ul class="pl-8 list-disc">
        <li><strong>Cột giá trị:</strong> các giá trị hoặc khoảng giá trị của dữ liệu.</li>
        <li><strong>Cột tần số:</strong> số lần mỗi giá trị xuất hiện.</li>
        <li><strong>Cột tần số tương đối:</strong> tần số chia tổng số quan sát, thường biểu diễn dưới dạng phần trăm.</li>
      </ul>
      <p>Ví dụ:</p>
      <pre class="pl-8">
Giá trị (x) | Tần số (f) | Tần số tương đối
     1       |     3      |     30%
     2       |     4      |     40%
     3       |     3      |     30%
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Biểu đồ tần số</h2>
    <div class="pl-8">
      <p>Biểu đồ tần số là đồ thị thể hiện tần số hoặc tần số tương đối của các giá trị dữ liệu, giúp hình dung phân bố dữ liệu.</p>
      <ul class="pl-8 list-disc">
        <li><strong>Biểu đồ cột:</strong> dùng cho dữ liệu rời, mỗi cột cao bằng tần số của giá trị tương ứng.</li>
        <li><strong>Biểu đồ hình tròn:</strong> dùng cho dữ liệu tần số tương đối, mỗi góc phần trăm đại diện cho tỷ lệ của giá trị.</li>
        <li><strong>Biểu đồ đường hoặc miền:</strong> thể hiện sự biến đổi tần số theo thứ tự các giá trị.</li>
      </ul>
      <p>Ví dụ biểu đồ cột:</p>
      <pre class="pl-8">
x: 1   2   3
f: 3   4   3
Cột cao tương ứng với f.
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Bảng tần số giúp thống kê nhanh số liệu, dễ tính các đại lượng trung bình.</li>
        <li>Biểu đồ tần số trực quan hóa phân bố, dễ nhận biết xu hướng, điểm cao nhất, thấp nhất.</li>
        <li>Khi dữ liệu nhiều hoặc liên tục, có thể phân nhóm thành các khoảng để lập bảng tần số nhóm.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit23: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Bảng tần số tương đối</h2>
    <div class="pl-8">
      <p>Bảng tần số tương đối cho biết tỷ lệ phần trăm hoặc tỷ lệ của mỗi giá trị so với tổng số quan sát.</p>
      <ul class="pl-8 list-disc">
        <li><strong>Cột giá trị:</strong> các giá trị hoặc khoảng giá trị của dữ liệu.</li>
        <li><strong>Cột tần số tương đối:</strong> <code>fᵣ = f / n</code>, trong đó <code>f</code> là tần số và <code>n</code> là tổng số quan sát.</li>
      </ul>
      <p>Ví dụ:</p>
      <pre class="pl-8">
Giá trị (x) | Tần số (f) | Tần số tương đối (fᵣ)
     1       |     3      |     0.3
     2       |     4      |     0.4
     3       |     3      |     0.3
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Biểu đồ tần số tương đối</h2>
    <div class="pl-8">
      <p>Biểu đồ tần số tương đối trực quan hóa tỷ lệ của các giá trị trong tổng số quan sát.</p>
      <ul class="pl-8 list-disc">
        <li><strong>Biểu đồ cột:</strong> chiều cao cột tỷ lệ với tần số tương đối (fᵣ).</li>
        <li><strong>Biểu đồ hình tròn:</strong> góc phần trăm của mỗi phần tương ứng với tần số tương đối của giá trị.</li>
      </ul>
      <p>Ví dụ biểu đồ cột:</p>
      <pre class="pl-8">
x: 1   2   3
fᵣ:0.3 0.4 0.3
Chiều cao cột tương ứng với fᵣ.
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tần số tương đối giúp so sánh dữ liệu giữa các tập khác nhau dễ dàng.</li>
        <li>Biểu đồ tần số tương đối trực quan hơn khi tổng số quan sát lớn hoặc khi so sánh nhiều tập dữ liệu.</li>
        <li>Tổng các tần số tương đối luôn bằng 1 (hoặc 100%).</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit24: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Bảng tần số ghép nhóm</h2>
    <div class="pl-8">
      <p>Khi dữ liệu nhiều và liên tục, ta chia thành các khoảng (nhóm) để lập bảng tần số. Mỗi nhóm gồm một khoảng giá trị và số quan sát trong khoảng đó.</p>
      <ul class="pl-8 list-disc">
        <li><strong>Cột nhóm:</strong> khoảng giá trị của dữ liệu.</li>
        <li><strong>Cột tần số:</strong> số quan sát trong mỗi nhóm.</li>
      </ul>
      <p>Ví dụ:</p>
      <pre class="pl-8">
Nhóm (x)   | Tần số (f)
0 - 10     | 5
10 - 20    | 8
20 - 30    | 7
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Bảng tần số tương đối ghép nhóm</h2>
    <div class="pl-8">
      <p>Bảng tần số tương đối ghép nhóm cho biết tỷ lệ quan sát trong mỗi nhóm so với tổng số.</p>
      <ul class="pl-8 list-disc">
        <li><strong>Cột tần số tương đối:</strong> <code>fᵣ = f / n</code>, trong đó <code>n</code> là tổng số quan sát.</li>
      </ul>
      <p>Ví dụ:</p>
      <pre class="pl-8">
Nhóm (x)   | Tần số (f) | Tần số tương đối (fᵣ)
0 - 10     | 5          | 0.25
10 - 20    | 8          | 0.4
20 - 30    | 7          | 0.35
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Biểu đồ tần số và tần số tương đối ghép nhóm</h2>
    <div class="pl-8">
      <p>Biểu đồ giúp trực quan hóa phân bố dữ liệu theo các nhóm:</p>
      <ul class="pl-8 list-disc">
        <li><strong>Biểu đồ cột:</strong> chiều cao cột tỷ lệ với tần số hoặc tần số tương đối của mỗi nhóm.</li>
        <li><strong>Biểu đồ miền:</strong> biểu diễn sự biến đổi tần số giữa các nhóm liên tục.</li>
        <li><strong>Biểu đồ đường:</strong> nối các điểm giữa trung điểm nhóm với tần số tương ứng.</li>
      </ul>
      <p>Ví dụ biểu đồ cột tần số tương đối:</p>
      <pre class="pl-8">
Nhóm (x)    0-10   10-20   20-30
fᵣ           0.25    0.4     0.35
Cột cao tương ứng với fᵣ.
      </pre>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Chọn khoảng nhóm hợp lý để bảng và biểu đồ dễ nhìn và chính xác.</li>
        <li>Tổng tần số tương đối các nhóm luôn bằng 1 (hoặc 100%).</li>
        <li>Biểu đồ tần số ghép nhóm giúp nhận biết phân bố dữ liệu, xu hướng và mức độ tập trung của dữ liệu.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit25: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Phép thử ngẫu nhiên</h2>
    <div class="pl-8">
      <p>Phép thử ngẫu nhiên là một thí nghiệm hoặc quan sát mà kết quả không thể dự đoán chính xác trước khi thực hiện, nhưng có thể xảy ra một trong nhiều kết quả khả dĩ.</p>
      <ul class="pl-8 list-disc">
        <li>Mỗi lần thực hiện phép thử gọi là một "lần thực hiện".</li>
        <li>Kết quả của mỗi lần thực hiện được gọi là "kết quả thực nghiệm".</li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Tung một đồng xu: kết quả có thể là "Mặt sấp" hoặc "Mặt ngửa".</li>
        <li>Gieo một xúc xắc 6 mặt: kết quả có thể là các số 1, 2, 3, 4, 5 hoặc 6.</li>
        <li>Chọn ngẫu nhiên một học sinh trong lớp: kết quả là tên một học sinh trong lớp đó.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Không gian mẫu</h2>
    <div class="pl-8">
      <p>Không gian mẫu là tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên, ký hiệu là <code>Ω</code>.</p>
      <ul class="pl-8 list-disc">
        <li>Mỗi kết quả riêng lẻ trong không gian mẫu gọi là "biến cố cơ bản".</li>
        <li>Không gian mẫu phải đầy đủ, bao gồm tất cả các kết quả khả dĩ và các kết quả này là riêng biệt.</li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Tung một đồng xu: <code>Ω = {Mặt sấp, Mặt ngửa}</code></li>
        <li>Gieo một xúc xắc 6 mặt: <code>Ω = {1, 2, 3, 4, 5, 6}</code></li>
        <li>Chọn ngẫu nhiên một học sinh trong lớp có 5 học sinh: <code>Ω = {H1, H2, H3, H4, H5}</code></li>
        <li>Tung hai đồng xu cùng lúc: <code>Ω = {(S,S), (S,N), (N,S), (N,N)}</code> (S = sấp, N = ngửa)</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Biến cố</h2>
    <div class="pl-8">
      <p>Biến cố là một tập con của không gian mẫu. Biến cố xảy ra nếu kết quả thực nghiệm thuộc tập con đó.</p>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Tung một đồng xu: biến cố "ra mặt ngửa" là <code>A = {Mặt ngửa}</code>.</li>
        <li>Gieo xúc xắc 6 mặt: biến cố "ra số chẵn" là <code>B = {2, 4, 6}</code>.</li>
        <li>Tung hai đồng xu: biến cố "có ít nhất một mặt ngửa" là <code>C = {(S,N), (N,S), (N,N)}</code>.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ tổng hợp</h2>
    <div class="pl-8">
      <p>Ví dụ kết hợp nhiều phép thử:</p>
      <ul class="pl-8 list-disc">
        <li>Tung một đồng xu và gieo một xúc xắc cùng lúc: 
          <code>Ω = {(S,1),(S,2),(S,3),(S,4),(S,5),(S,6),(N,1),(N,2),(N,3),(N,4),(N,5),(N,6)}</code></li>
        <li>Biến cố "ra đồng xu sấp và số lẻ trên xúc xắc": 
          <code>A = {(S,1),(S,3),(S,5)}</code></li>
        <li>Biến cố "ra số chẵn trên xúc xắc hoặc đồng xu ngửa": 
          <code>B = {(S,2),(S,4),(S,6),(N,1),(N,2),(N,3),(N,4),(N,5),(N,6)}</code></li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Hiểu phép thử ngẫu nhiên và không gian mẫu là cơ sở để học xác suất.</li>
        <li>Mỗi kết quả trong không gian mẫu phải rõ ràng, không trùng lặp và đầy đủ.</li>
        <li>Biến cố là tập con của không gian mẫu và có thể kết hợp bằng các phép toán tập hợp (hợp, giao, bổ sung).</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit26: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm xác suất</h2>
    <div class="pl-8">
      <p>Xác suất của một biến cố là con số đo lường khả năng xảy ra của biến cố đó khi thực hiện phép thử ngẫu nhiên.</p>
      <p>Ký hiệu: Nếu biến cố là <code>A</code>, xác suất của biến cố đó là <code>P(A)</code>.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Công thức xác suất</h2>
    <div class="pl-8">
      <p>Cho một phép thử có không gian mẫu <code>Ω</code> hữu hạn, tất cả các kết quả cơ bản là bằng nhau, biến cố <code>A</code> là tập con của <code>Ω</code>. Khi đó:</p>
      <pre class="pl-8">P(A) = số kết quả thuận lợi / tổng số kết quả = |A| / |Ω|</pre>
      <p>Trong đó <code>|A|</code> là số phần tử trong biến cố, <code>|Ω|</code> là số phần tử trong không gian mẫu.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Tính chất của xác suất</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>0 ≤ P(A) ≤ 1.</li>
        <li>P(Ω) = 1 (biến cố chắc chắn xảy ra).</li>
        <li>P(∅) = 0 (biến cố không thể xảy ra).</li>
        <li>Biến cố A và B loại trừ nhau: P(A ∪ B) = P(A) + P(B).</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tung một đồng xu: biến cố <code>A</code> là "ra mặt ngửa": 
          <code>Ω = {S, N}, A = {N} ⇒ P(A) = 1/2</code></li>
        <li>Gieo một xúc xắc 6 mặt: biến cố <code>B</code> là "ra số chẵn": 
          <code>Ω = {1,2,3,4,5,6}, B = {2,4,6} ⇒ P(B) = 3/6 = 1/2</code></li>
        <li>Tung hai đồng xu: biến cố <code>C</code> là "có ít nhất một mặt ngửa": 
          <code>Ω = {(S,S),(S,N),(N,S),(N,N)}, C = {(S,N),(N,S),(N,N)} ⇒ P(C) = 3/4</code></li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Xác suất giúp đánh giá khả năng xảy ra của biến cố trong thực tế.</li>
        <li>Luôn xác định không gian mẫu và tập hợp các kết quả thuận lợi trước khi tính xác suất.</li>
        <li>Xác suất chỉ có nghĩa khi phép thử được thực hiện ngẫu nhiên và các kết quả cơ bản là bằng nhau.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit27: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm góc nội tiếp</h2>
    <div class="pl-8">
      <p>Góc nội tiếp là góc có đỉnh nằm trên đường tròn và hai cạnh cắt đường tròn tại hai điểm khác nhau.</p>
      <ul class="pl-8 list-disc">
        <li>Đỉnh: điểm nằm trên đường tròn.</li>
        <li>Các cạnh: là các đoạn thẳng nối đỉnh với hai điểm khác trên đường tròn.</li>
        <li>Góc nội tiếp được tính bằng nửa cung bị chắn trên đường tròn.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Tính chất</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Góc nội tiếp chắn cung bằng nửa số đo của cung đó: <code>∠ABC = 1/2 × cung AC</code>.</li>
        <li>Các góc nội tiếp chắn cùng một cung bằng nhau.</li>
        <li>Góc nội tiếp chắn nửa đường tròn là góc vuông.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Cho đường tròn (O), lấy điểm A, B, C trên đường tròn, góc nội tiếp ∠ABC chắn cung AC, nếu cung AC = 80° ⇒ ∠ABC = 40°.</li>
        <li>Cho đường tròn (O) đường kính AD, lấy điểm B trên đường tròn khác D, ∠ABD là góc nội tiếp chắn nửa đường tròn ⇒ ∠ABD = 90°.</li>
        <li>Nếu hai góc nội tiếp ∠ABC và ∠ADC cùng chắn cung AC ⇒ ∠ABC = ∠ADC.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Chứng minh các tính chất của hình học liên quan đường tròn.</li>
        <li>Tính số đo góc trong các bài toán về tam giác nội tiếp đường tròn.</li>
        <li>Giải các bài toán hình học phẳng, đặc biệt liên quan đến tam giác vuông và tam giác cân.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Luôn xác định đúng cung bị chắn khi tính số đo góc nội tiếp.</li>
        <li>Góc nội tiếp có tính chất đặc biệt khi chắn nửa đường tròn (góc vuông).</li>
        <li>Sử dụng tính chất các góc nội tiếp bằng nhau để chứng minh các bài toán hình học.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit28: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Đường tròn ngoại tiếp tam giác</h2>
    <div class="pl-8">
      <p>Đường tròn ngoại tiếp tam giác là đường tròn đi qua tất cả các đỉnh của tam giác.</p>
      <ul class="pl-8 list-disc">
        <li>Đỉnh của tam giác nằm trên đường tròn ngoại tiếp.</li>
        <li>Tâm đường tròn ngoại tiếp gọi là <strong>tâm ngoại tiếp</strong> (ký hiệu <code>O</code>).</li>
        <li>Tâm ngoại tiếp là giao điểm của ba đường trung trực của các cạnh tam giác.</li>
        <li>Bán kính đường tròn ngoại tiếp gọi là <strong>bán kính ngoại tiếp</strong> (ký hiệu <code>R</code>).</li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Cho tam giác ABC, giao điểm của ba đường trung trực là O, vẽ đường tròn tâm O bán kính OA = OB = OC ⇒ đường tròn ngoại tiếp tam giác ABC.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Đường tròn nội tiếp tam giác</h2>
    <div class="pl-8">
      <p>Đường tròn nội tiếp tam giác là đường tròn nằm trong tam giác và tiếp xúc với cả ba cạnh của tam giác.</p>
      <ul class="pl-8 list-disc">
        <li>Đường tròn nội tiếp nằm hoàn toàn bên trong tam giác.</li>
        <li>Tâm đường tròn nội tiếp gọi là <strong>tâm nội tiếp</strong> (ký hiệu <code>I</code>).</li>
        <li>Tâm nội tiếp là giao điểm của ba đường phân giác trong tam giác.</li>
        <li>Bán kính đường tròn nội tiếp gọi là <strong>bán kính nội tiếp</strong> (ký hiệu <code>r</code>).</li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Cho tam giác ABC, giao điểm của ba đường phân giác là I, vẽ đường tròn tâm I tiếp xúc với các cạnh ⇒ đường tròn nội tiếp tam giác ABC.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Tính chất</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Bất kỳ tam giác nào cũng có duy nhất một đường tròn ngoại tiếp và một đường tròn nội tiếp.</li>
        <li>Đường tròn ngoại tiếp đi qua tất cả các đỉnh, đường tròn nội tiếp tiếp xúc với tất cả các cạnh.</li>
        <li>Bán kính ngoại tiếp và nội tiếp có thể tính theo công thức với cạnh và diện tích tam giác:</li>
        <pre class="pl-8">
R = (a·b·c) / (4·S),   r = S / p
Trong đó: 
a, b, c là độ dài các cạnh
S là diện tích tam giác
p = (a + b + c)/2 là nửa chu vi
        </pre>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Cho tam giác ABC có các cạnh a = 5, b = 6, c = 7:</li>
        <ul class="pl-8 list-disc">
          <li>Tính nửa chu vi: p = (5 + 6 + 7)/2 = 9</li>
          <li>Tính diện tích S = √[p(p-a)(p-b)(p-c)] = √[9·4·3·2] = √216 ≈ 14.7</li>
          <li>Bán kính nội tiếp: r = S/p ≈ 14.7/9 ≈ 1.63</li>
          <li>Bán kính ngoại tiếp: R = (a·b·c)/(4·S) = (5·6·7)/(4·14.7) ≈ 5.71</li>
        </ul>
        <li>Vẽ đường tròn ngoại tiếp tâm O bán kính R ≈ 5.71 và đường tròn nội tiếp tâm I bán kính r ≈ 1.63.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Chứng minh các tính chất về góc và cạnh trong tam giác.</li>
        <li>Tính toán các đại lượng hình học liên quan đến tam giác (diện tích, chu vi, bán kính đường tròn).</li>
        <li>Giải các bài toán thực tế liên quan đến thiết kế hình học, kiến trúc, bản vẽ kỹ thuật.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit29: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm tứ giác nội tiếp</h2>
    <div class="pl-8">
      <p>Tứ giác nội tiếp là tứ giác có tất cả các đỉnh nằm trên một đường tròn.</p>
      <ul class="pl-8 list-disc">
        <li>Đường tròn đi qua bốn đỉnh của tứ giác gọi là <strong>đường tròn ngoại tiếp</strong> của tứ giác.</li>
        <li>Tứ giác nội tiếp luôn có duy nhất một đường tròn ngoại tiếp.</li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Cho tứ giác ABCD, nếu tồn tại một đường tròn đi qua A, B, C, D ⇒ ABCD là tứ giác nội tiếp.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Tính chất</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tổng hai góc đối diện của tứ giác nội tiếp bằng 180°: <code>∠A + ∠C = 180°</code>, <code>∠B + ∠D = 180°</code>.</li>
        <li>Đường chéo có thể không bằng nhau, nhưng giao điểm của đường chéo giúp xác định tâm đường tròn ngoại tiếp.</li>
        <li>Ngược lại, nếu một tứ giác có tổng hai góc đối diện bằng 180°, thì tứ giác đó có thể nội tiếp một đường tròn.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Cho tứ giác ABCD có <code>∠A = 70°, ∠C = 110°</code>, <code>∠B = 80°, ∠D = 100°</code> ⇒ ∠A+∠C=180°, ∠B+∠D=180° ⇒ ABCD là tứ giác nội tiếp.</li>
        <li>Cho tứ giác vuông góc: góc ở các đỉnh A và C bằng nhau ⇒ tổng hai góc đối diện bằng 180° ⇒ tứ giác nội tiếp.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Chứng minh các tính chất về góc và cạnh trong tứ giác.</li>
        <li>Giải bài toán hình học liên quan đến các đoạn thẳng, đường chéo, góc nội tiếp.</li>
        <li>Thiết kế bản vẽ hình học, kiến trúc hoặc bài toán thực tế cần tứ giác nội tiếp.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Lưu ý</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Không phải mọi tứ giác đều nội tiếp được một đường tròn.</li>
        <li>Khi giải bài toán, luôn kiểm tra tổng hai góc đối diện để xác định tứ giác nội tiếp.</li>
        <li>Biết tính chất tổng hai góc đối diện bằng 180° giúp chứng minh và tính toán các đại lượng khác.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit30: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm đa giác đều</h2>
    <div class="pl-8">
      <p>Đa giác đều là đa giác có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau.</p>
      <ul class="pl-8 list-disc">
        <li>Số cạnh của đa giác ≥ 3.</li>
        <li>Tất cả các cạnh bằng nhau ⇒ các đoạn thẳng nối các đỉnh đều bằng nhau (độ dài bằng nhau).</li>
        <li>Tất cả các góc bằng nhau ⇒ các góc trong của đa giác đều bằng nhau.</li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Tam giác đều: ba cạnh bằng nhau, ba góc bằng 60°.</li>
        <li>Tứ giác đều (hình vuông): bốn cạnh bằng nhau, bốn góc bằng 90°.</li>
        <li>Ngũ giác đều: năm cạnh bằng nhau, mỗi góc trong bằng 108°.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Tính chất của đa giác đều</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Đa giác đều luôn là đa giác nội tiếp: tồn tại một đường tròn đi qua tất cả các đỉnh.</li>
        <li>Đa giác đều có thể vẽ được bằng compa và thước kẻ dựa vào tâm đường tròn ngoại tiếp.</li>
        <li>Tổng các góc trong đa giác đều với n cạnh: <code>Tổng góc = (n-2)·180°</code>, mỗi góc trong: <code>Góc = [(n-2)·180°]/n</code>.</li>
        <li>Mỗi đa giác đều có tâm đối xứng và trục đối xứng.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Ví dụ minh họa</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tam giác đều: 3 cạnh bằng 5 cm, mỗi góc = 60°.</li>
        <li>Hình vuông: 4 cạnh bằng 4 cm, mỗi góc = 90°, đường chéo cắt nhau tại trung điểm và vuông góc.</li>
        <li>Ngũ giác đều: 5 cạnh bằng 3 cm, mỗi góc = 108°, tâm đường tròn ngoại tiếp tại trung điểm đối xứng.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Công thức liên quan</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Góc trong mỗi đa giác đều n cạnh: <code>α = [(n-2)·180°]/n</code></li>
        <li>Bán kính đường tròn ngoại tiếp R: <code>R = a / (2·sin(π/n))</code> (a = độ dài cạnh)</li>
        <li>Bán kính đường tròn nội tiếp r: <code>r = a / (2·tan(π/n))</code></li>
        <li>Diện tích đa giác đều: <code>S = n·a² / (4·tan(π/n))</code></li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Vẽ các hình học đều: tam giác đều, hình vuông, ngũ giác đều…</li>
        <li>Tính diện tích, chu vi các đa giác đều trong bài toán thực tế và kỹ thuật.</li>
        <li>Chứng minh các tính chất đối xứng, trục đối xứng trong đa giác đều.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit31: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Hình trụ</h2>
    <div class="pl-8">
      <p>Hình trụ là hình không gian giới hạn bởi hai mặt phẳng đáy song song và bằng nhau, nối với nhau bởi một mặt cong.</p>
      <ul class="pl-8 list-disc">
        <li>Đáy: hai hình tròn bằng nhau, song song.</li>
        <li>Mặt bên: hình chữ nhật khi trải ra, chiều cao bằng khoảng cách giữa hai đáy.</li>
        <li>Thể tích: <code>V = π·r²·h</code>, trong đó <code>r</code> là bán kính đáy, <code>h</code> là chiều cao.</li>
        <li>Diện tích xung quanh: <code>Sxq = 2·π·r·h</code></li>
        <li>Diện tích toàn phần: <code>Stp = 2·π·r·h + 2·π·r²</code></li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Hình trụ có bán kính đáy r = 3 cm, chiều cao h = 10 cm:</li>
        <ul class="pl-8 list-disc">
          <li>Thể tích: V = π·3²·10 = 90π cm³</li>
          <li>Diện tích xung quanh: Sxq = 2·π·3·10 = 60π cm²</li>
          <li>Diện tích toàn phần: Stp = 60π + 2·π·3² = 60π + 18π = 78π cm²</li>
        </ul>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Hình nón</h2>
    <div class="pl-8">
      <p>Hình nón là hình không gian có một đáy hình tròn và một đỉnh không nằm trong mặt phẳng đáy, nối với đáy bằng mặt cong.</p>
      <ul class="pl-8 list-disc">
        <li>Đáy: hình tròn.</li>
        <li>Đỉnh: điểm ngoài mặt phẳng đáy, nối với đáy bằng các đường sinh.</li>
        <li>Đường sinh: đoạn thẳng nối đỉnh với điểm trên đáy.</li>
        <li>Thể tích: <code>V = (1/3)·π·r²·h</code>, trong đó <code>r</code> là bán kính đáy, <code>h</code> là chiều cao.</li>
        <li>Diện tích xung quanh: <code>Sxq = π·r·l</code>, trong đó <code>l</code> là đường sinh.</li>
        <li>Diện tích toàn phần: <code>Stp = π·r·l + π·r²</code></li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Hình nón có bán kính đáy r = 3 cm, chiều cao h = 4 cm, đường sinh l = 5 cm:</li>
        <ul class="pl-8 list-disc">
          <li>Thể tích: V = (1/3)·π·3²·4 = 12π cm³</li>
          <li>Diện tích xung quanh: Sxq = π·3·5 = 15π cm²</li>
          <li>Diện tích toàn phần: Stp = 15π + π·3² = 15π + 9π = 24π cm²</li>
        </ul>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. So sánh hình trụ và hình nón</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Cả hai đều có đáy hình tròn.</li>
        <li>Hình trụ có hai đáy song song, hình nón chỉ có một đáy.</li>
        <li>Thể tích hình nón bằng 1/3 thể tích hình trụ có cùng đáy và chiều cao.</li>
        <li>Hình trụ có mặt bên là hình chữ nhật khi trải ra, hình nón có mặt bên là hình quạt tròn.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Tính thể tích và diện tích các vật thể tròn trong thực tế: ống, lon, nón đèn giao thông.</li>
        <li>Ứng dụng trong kiến trúc, kỹ thuật, bài toán thực tế về hình học không gian.</li>
        <li>Giải bài toán tính vật liệu cần thiết, thể tích chứa chất lỏng hoặc khối lượng vật thể hình trụ, nón.</li>
      </ul>
    </div>
  </section>
</main>
`,
  unit32: `<main>
  <section>
    <h2 class="font-bold text-xl mb-3">1. Khái niệm hình cầu</h2>
    <div class="pl-8">
      <p>Hình cầu là tập hợp tất cả các điểm trong không gian cách một điểm cố định (tâm) một khoảng không đổi (bán kính).</p>
      <ul class="pl-8 list-disc">
        <li>Tâm của hình cầu ký hiệu là <code>O</code>.</li>
        <li>Bán kính hình cầu ký hiệu là <code>R</code>.</li>
        <li>Mặt ngoài của hình cầu gọi là <strong>mặt cầu</strong>.</li>
      </ul>
      <p><strong>Ví dụ:</strong> Quả bóng, quả cầu trang trí đều là các hình cầu thực tế.</p>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">2. Thể tích và diện tích hình cầu</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Thể tích: <code>V = (4/3)·π·R³</code></li>
        <li>Diện tích mặt cầu: <code>S = 4·π·R²</code></li>
      </ul>
      <p><strong>Ví dụ:</strong></p>
      <ul class="pl-8 list-disc">
        <li>Hình cầu bán kính R = 3 cm:</li>
        <ul class="pl-8 list-disc">
          <li>Thể tích: V = (4/3)·π·3³ = 36π cm³</li>
          <li>Diện tích mặt cầu: S = 4·π·3² = 36π cm²</li>
        </ul>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">3. Đường kính và mặt cắt</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Đường kính: gấp đôi bán kính, <code>D = 2·R</code>.</li>
        <li>Mặt cắt qua tâm bằng một mặt phẳng đi qua tâm sẽ tạo ra một hình tròn có bán kính bằng bán kính hình cầu.</li>
        <li>Mọi đường thẳng đi qua tâm và hai điểm trên mặt cầu đều là đường kính.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">4. Ví dụ minh họa</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Hình cầu bán kính 5 cm: V = (4/3)·π·5³ = 523.6 cm³, S = 4·π·5² = 314 cm²</li>
        <li>Hình cầu bán kính 2 m: V = (4/3)·π·2³ = 33.51 m³, S = 4·π·2² = 50.27 m²</li>
      </ul>
    </div>
  </section>

  <section>
    <h2 class="font-bold text-xl mb-3">5. Ứng dụng</h2>
    <div class="pl-8">
      <ul class="pl-8 list-disc">
        <li>Chế tạo các vật thể hình cầu: bóng, quả cầu trang trí, bình chứa tròn.</li>
        <li>Tính thể tích và diện tích trong các bài toán kỹ thuật, kiến trúc, vật lý.</li>
        <li>Ứng dụng trong hình học không gian, vật lý lượng tử, cơ học và mô hình hóa các vật thể tròn.</li>
      </ul>
    </div>
  </section>
</main>
`,
};

content.innerHTML = data[`unit${unit}`];
