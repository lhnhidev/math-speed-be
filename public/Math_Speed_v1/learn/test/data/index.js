export const data = {
  unit1: {
    level1: [
      {
        question: "Phương trình bậc nhất hai ẩn x và y là hệ thức dạng",
        answers: [
          { index: 0, ans: "ax + by = c", type: true },
          { index: 1, ans: "ax² + by = c", type: false },
          { index: 2, ans: "0x + 0y = c", type: false },
          { index: 3, ans: "ax + b√y = c", type: false },
        ],
        explain: `
      Phương trình bậc nhất hai ẩn x và y là hệ thức dạng<br>
      <p class="center-text highlight red">ax + by = c</p>
    `,
      },
      {
        question:
          "Hệ thức nào <span class='highlight red'>không</span> là phương trình bậc nhất hai ẩn",
        answers: [
          { index: 0, ans: "0x + 0y = 5", type: true },
          { index: 1, ans: "3x + 2y = 6", type: false },
          { index: 2, ans: "7y = 2", type: false },
          { index: 3, ans: "0x + y = -1", type: false },
        ],
        explain: `
      Phương trình bậc nhất hai ẩn x và y là hệ thức dạng<br>
      <p class="center-text">ax + by = c</p>
      <p>Trong đó a và b <span class="highlight red">không đồng thời bằng 0</span></p>
    `,
      },
      {
        question: "Cặp số nào sau đây là nghiệm của phương trình x + 3y = -5",
        answers: [
          { index: 0, ans: "(4; -3)", type: true },
          { index: 1, ans: "(-2; 2)", type: false },
          { index: 2, ans: "(3; 1)", type: false },
          { index: 3, ans: "(-6; 2)", type: false },
        ],
        explain: `
      Thay x = 4, y = -3 vào phương trình ta được<br>
      4 + 3(-3) = -5<br>
      -5 = -5 (Đúng)
    `,
      },
      {
        question: "Cặp số nào sau đây là nghiệm của phương trình 2x - y = 7",
        answers: [
          { index: 0, ans: "(5; 3)", type: true },
          { index: 1, ans: "(3; 1)", type: false },
          { index: 2, ans: "(2; -3)", type: false },
          { index: 3, ans: "(6; -5)", type: false },
        ],
        explain: `
      Thay từng cặp số vào phương trình 2x - y = 7<br>
      Với (5; 3): 2(5) - 3 = 10 - 3 = 7 (Đúng)<br>
      Các cặp còn lại không thỏa mãn.
    `,
      },
      {
        question:
          "Điều kiện để hệ số của phương trình ax + by = c không phải là phương trình bậc nhất hai ẩn là",
        answers: [
          { index: 0, ans: "a = 0 và b = 0", type: true },
          { index: 1, ans: "a = 0 hoặc b = 0", type: false },
          { index: 2, ans: "a = 1 và b = -1", type: false },
          { index: 3, ans: "c = 0", type: false },
        ],
        explain: `
      Phương trình bậc nhất hai ẩn có dạng ax + by = c<br>
      Trong đó, a và b <span class="highlight red">không đồng thời bằng 0</span>.
    `,
      },
      {
        question: "Phương trình nào sau đây là phương trình bậc nhất hai ẩn",
        answers: [
          { index: 0, ans: "2x - 3y = 5", type: true },
          { index: 1, ans: "x² + y = 4", type: false },
          { index: 2, ans: "y² = 7", type: false },
          { index: 3, ans: "√x + y = 1", type: false },
        ],
        explain: `
      Phương trình bậc nhất hai ẩn có dạng ax + by = c<br>
      Phương trình 2x - 3y = 5 là đúng dạng.
    `,
      },
      {
        question:
          "Tìm giá trị của m để cặp số (1; -2) là nghiệm của phương trình mx - y = 5",
        answers: [
          { index: 0, ans: "3", type: true },
          { index: 1, ans: "5", type: false },
          { index: 2, ans: "7", type: false },
          { index: 3, ans: "0", type: false },
        ],
        explain: `
      Thay x = 1, y = -2 vào phương trình mx - y = 5<br>
      m(1) - (-2) = 5<br>
      m + 2 = 5 ⟹ m = 3.
    `,
      },
      {
        question: "Phương trình nào có nghiệm (2; 3)",
        answers: [
          { index: 0, ans: "x + 2y = 8", type: true },
          { index: 1, ans: "x - y = 5", type: false },
          { index: 2, ans: "3x + y = 10", type: false },
          { index: 3, ans: "2x - 3y = 6", type: false },
        ],
        explain: `
      Thay x = 2, y = 3 vào từng phương trình:<br>
      Với x + 2y = 8: 2 + 2(3) = 8 (Đúng).<br>
      Các phương trình còn lại không thỏa mãn.
    `,
      },
      {
        question: "Cặp nghiệm nào đúng với phương trình 3x + 4y = 12",
        answers: [
          { index: 0, ans: "(4; 0)", type: true },
          { index: 1, ans: "(2; 3)", type: false },
          { index: 2, ans: "(0; 3)", type: false },
          { index: 3, ans: "(1; 2)", type: false },
        ],
        explain: `
      Thay từng cặp nghiệm vào phương trình 3x + 4y = 12:<br>
      Với (4; 0): 3(4) + 4(0) = 12 (Đúng).<br>
      Các cặp còn lại không thỏa mãn.
    `,
      },
    ],
    level2: [
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">2x + y = 5</p>
                <p class="highlight red indent">3x - y = 4</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(3; -1)", type: true },
          { index: 1, ans: "(4; -2)", type: false },
          { index: 2, ans: "(2; 1)", type: false },
          { index: 3, ans: "(1; 2)", type: false },
        ],
        explain: `
                Cộng từng vế của hai phương trình ta được 2x + y + 3x - y = 5 + 4 hay 5x = 9.<br>
                Suy ra x = 9/5.<br>
                Thế x = 9/5 vào phương trình đầu tiên, ta có 2(9/5) + y = 5 hay y = ...<br>
                Đáp án là (3; -1).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">x + 2y = 7</p>
                <p class="highlight red indent">3x - 4y = -5</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(3; 2)", type: true },
          { index: 1, ans: "(1; 3)", type: false },
          { index: 2, ans: "(2; 4)", type: false },
          { index: 3, ans: "(-1; 5)", type: false },
        ],
        explain: `
                Nhân phương trình đầu tiên với 3, ta có:<br>
                <p class="highlight red indent">3x + 6y = 21</p>
                Cộng với phương trình thứ hai:<br>
                3x + 6y + 3x - 4y = 21 - 5.<br>
                Đáp án là (3; 2).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">x + y = 5</p>
                <p class="highlight red indent">x - y = 3</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(4; 1)", type: true },
          { index: 1, ans: "(3; 2)", type: false },
          { index: 2, ans: "(2; 3)", type: false },
          { index: 3, ans: "(1; 4)", type: false },
        ],
        explain: `
                Cộng từng vế của hai phương trình ta được:<br>
                x + y + x - y = 5 + 3 hay 2x = 8 ⟹ x = 4.<br>
                Thế x = 4 vào phương trình thứ nhất, ta được 4 + y = 5 ⟹ y = 1.<br>
                Vậy nghiệm là (4; 1).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">2x + y = 9</p>
                <p class="highlight red indent">3x - y = 6</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(3; 3)", type: true },
          { index: 1, ans: "(2; 5)", type: false },
          { index: 2, ans: "(1; 7)", type: false },
          { index: 3, ans: "(4; 1)", type: false },
        ],
        explain: `
                Cộng từng vế của hai phương trình ta được:<br>
                2x + y + 3x - y = 9 + 6 hay 5x = 15 ⟹ x = 3.<br>
                Thế x = 3 vào phương trình thứ nhất, ta được 2(3) + y = 9 ⟹ y = 3.<br>
                Vậy nghiệm là (3; 3).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">4x + 3y = 18</p>
                <p class="highlight red indent">2x - 3y = 6</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(3; 2)", type: true },
          { index: 1, ans: "(2; 1)", type: false },
          { index: 2, ans: "(1; 3)", type: false },
          { index: 3, ans: "(4; 0)", type: false },
        ],
        explain: `
                Cộng từng vế của hai phương trình ta được:<br>
                4x + 3y + 2x - 3y = 18 + 6 hay 6x = 24 ⟹ x = 4.<br>
                Thế x = 4 vào phương trình đầu tiên, ta được 4(4) + 3y = 18 ⟹ y = 2.<br>
                Vậy nghiệm là (3; 2).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">5x + y = 20</p>
                <p class="highlight red indent">3x - y = 10</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(5; -5)", type: true },
          { index: 1, ans: "(4; -2)", type: false },
          { index: 2, ans: "(3; -1)", type: false },
          { index: 3, ans: "(2; 0)", type: false },
        ],
        explain: `
                Cộng từng vế của hai phương trình ta được:<br>
                5x + y + 3x - y = 20 + 10 hay 8x = 30 ⟹ x = 5.<br>
                Thế x = 5 vào phương trình đầu tiên, ta được 5(5) + y = 20 ⟹ y = -5.<br>
                Vậy nghiệm là (5; -5).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">3x + 2y = 12</p>
                <p class="highlight red indent">2x - y = 5</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(4; 0)", type: true },
          { index: 1, ans: "(3; 1)", type: false },
          { index: 2, ans: "(2; 2)", type: false },
          { index: 3, ans: "(1; 3)", type: false },
        ],
        explain: `
                Nhân phương trình thứ hai với 2, ta được:<br>
                <p class="highlight red indent">4x - 2y = 10</p>
                Cộng với phương trình đầu:<br>
                3x + 2y + 4x - 2y = 12 + 10 hay 7x = 22 ⟹ x = 4.<br>
                Thế x vào, tính ra y. Đáp án là (4; 0).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">x + 3y = 10</p>
                <p class="highlight red indent">2x - y = 4</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(4; 2)", type: true },
          { index: 1, ans: "(3; 1)", type: false },
          { index: 2, ans: "(2; 3)", type: false },
          { index: 3, ans: "(1; 4)", type: false },
        ],
        explain: `
                Nhân phương trình đầu với 2, ta được:<br>
                <p class="highlight red indent">2x + 6y = 20</p>
                Cộng với phương trình thứ hai:<br>
                2x + 6y + 2x - y = 20 + 4.<br>
                Kết quả x và y là số nguyên. Đáp án là (4; 2).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">3x + y = 9</p>
                <p class="highlight red indent">4x - 2y = 8</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(2; 3)", type: true },
          { index: 1, ans: "(1; 4)", type: false },
          { index: 2, ans: "(3; 2)", type: false },
          { index: 3, ans: "(2; 1)", type: false },
        ],
        explain: `
                Nhân phương trình đầu tiên với 2, ta được:<br>
                6x + 2y = 18
                Cộng với phương trình thứ hai:<br>
                6x + 2y + 4x - 2y = 18 + 8.<br>
                Giải ra x và y. Đáp án là (2; 3).
            `,
      },
      {
        question: `
                Giải hệ phương trình<br>
                <p class="highlight red indent">x - 2y = -1</p>
                <p class="highlight red indent">3x + y = 14</p>
                bằng phương pháp cộng đại số
            `,
        answers: [
          { index: 0, ans: "(3; 5)", type: true },
          { index: 1, ans: "(2; 4)", type: false },
          { index: 2, ans: "(4; 3)", type: false },
          { index: 3, ans: "(1; 6)", type: false },
        ],
        explain: `
                Nhân phương trình đầu tiên với 3, ta được:<br>
                3x - 6y = -3
                Cộng với phương trình thứ hai:<br>
                3x - 6y + 3x + y = -3 + 14.<br>
                Kết quả là (3; 5).
            `,
      },
    ],
    level3: [
      {
        question: `Hệ thức nào <span class='highlight red'>không</span> là phương trình bậc nhất hai ẩn`,
        answers: [
          { index: 0, ans: "0x + 0y = 1", type: true },
          { index: 1, ans: "5x - 8y = 0", type: false },
          { index: 2, ans: "4x + 0y = -2", type: false },
          { index: 3, ans: "0x - 3y = 9", type: false },
        ],
        explain: `
      Phương trình bậc nhất hai ẩn x và y là hệ thức dạng<br>
      <p class="center-text">ax + by = c</p>
      <p> Trong đó a và b <span class="highlight red">không đồng thời bằng 0
      </span></p>
    `,
      },
      {
        question: `Cặp số nào sau đây là nghiệm của phương trình 4x - 3y = 21`,
        answers: [
          { index: 0, ans: "(3; -3)", type: true },
          { index: 1, ans: "(9; 3)", type: false },
          { index: 2, ans: "(6; -2)", type: false },
          { index: 3, ans: "(-9; 0)", type: false },
        ],
        explain: `
      Thay x = 3, y = -3 vào phương trình ta được<br>
      4.3 - 3(-3) = 21<br>
      21 = 21 (Luôn đúng)
    `,
      },
      {
        question:
          "Đâu <span class='highlight red'>không</span> phải là hệ phương trình bậc nhất hai ẩn",
        answers: [
          { index: 0, ans: `3x = 9<br>8x - 2y² = 9`, type: true },
          { index: 1, ans: `-x - 3y = 3<br>8x + 2y = -6`, type: false },
          { index: 2, ans: `7x + y = 0<br>x - y = 2`, type: false },
          { index: 3, ans: `-y = 1<br>6x + y = 4`, type: false },
        ],
        explain: `
      8x - 2y² = 9 không phải phương trình bậc nhất hai ẩn
    `,
      },
      {
        question: `Một mảnh vườn hình chữ nhật có chu vi 34m. Nếu tăng 
        chiều dài thêm 3m và tăng chiều rộng thêm 2m thì diện tích tăng 
        thêm 45m². Đâu là hệ phương trình tính chiều dài, chiều rộng của 
        mảnh vườn.`,
        answers: [
          {
            index: 0,
            ans: `2(x + y) = 34<br>(x + 2)(y + 3) = xy + 45`,
            type: true,
          },
          {
            index: 1,
            ans: `2(x - y) = 10<br>(x + 1)(y - 2) = xy - 20`,
            type: false,
          },
          {
            index: 2,
            ans: `3(x + y) = 45<br>(x + 3)(y + 5) = xy + 80`,
            type: false,
          },
          {
            index: 3,
            ans: `x + y = 20<br>(x + 4)(y - 1) = xy + 15`,
            type: false,
          },
        ],
        explain: `
      Gọi chiều rộng và chiều dài của mảnh vườn là x và y<br>
      Theo đề bài ta có:<br>
      Chu vi hình chữ nhật là: 2(x + y) = 34. (1)<br>
      Hình chữ nhật mới có chiều dài (y + 3)m, chiều rộng (x + 2)m nên 
      có diện tích là (x + 2)(y + 3). Do hình chữ nhật mới có diện tích 
      tăng thêm 45m2 nên ta có phương trình:<br>
      (x + 2)(y + 3) = xy + 45 (2)<br>
      Từ (1) và (2) ta có hệ phương trình:<br><br>
      <p class='highlight red'>2(x + y) = 34</p>
      <p class='highlight red'>(x + 2)(y + 3) = xy + 45</p>
    `,
      },
      {
        question: `Một công ty dự định sản xuất một 1000 hộp khẩu trang so 
        với quy định. Tuy nhiên do dịch bệnh Covid – 19 bùng phát nên công 
        ty đã đẩy nhanh tiến độ mỗi ngày 10 hộp khẩu trang để kịp phục vụ 
        thị trường do vậy công ty đã hoàn thành sớm hơn kế hoạch 5 ngày. 
        Hỏi theo kế hoạch ban đầu công ty dự kiến sản xuất trong bao nhiêu 
        ngày.`,
        answers: [
          { index: 0, ans: `xy = 1000<br>(x - 5)(y + 10) = 1000`, type: true },
          { index: 1, ans: `xy = 1000<br>(x - 3)(y + 8) = 1200`, type: false },
          { index: 2, ans: `xy = 1000<br>(x - 4)(y + 12) = 800`, type: false },
          {
            index: 3,
            ans: `xy = 1500<br>(x - 5)(y + 10) = xy + 15`,
            type: false,
          },
        ],
        explain: `
      Gọi thời gian công ty dự định sản xuất khẩu trang là x<br>
      Gọi năng suất làm vệc ban đầu của công ty là y<br>
      Vì ban đầu công ty dự định sản xuất 1000 hộp khẩu trang nên 
      ta có phương trình: xy = 1000 (1)<br>
      Vì hoàn thành sớm hơn 5 ngày nên thời gian thực tế công ty 
      sản xuất là x - 5<br>
      Vì mỗi ngày công ty làm thêm 10 hộp khẩu trang nên năng suất 
      thực tế của công ty là y + 10<br>
      Ta có phương trình: 1000 = (x - 5)(y +10) (2)<br>
      Từ (1) và (2) ta có hệ phương trình:<br><br>
      <p class='highlight red'>xy = 1000</p>
      <p class='highlight red'>(x - 5)(y + 10) = 1000</p>
    `,
      },
    ],
  },
  unit2: {
    level1: [
      {
        question: `
      Giải hệ phương trình<br>
      <p class="highlight red indent">x + y = 3</p>
      <p class="highlight red indent">2x - 3y = 1</p>
      theo hướng dẫn sau
      <p>1. Từ phương trình thứ nhất, biểu diễn y theo x rồi thế vào phương 
      trình thứ hai để được một phương trình với một ẩn x. Giải phương trình 
      một ẩn đó để tìm giá trị của x.</p>
      <p>2. Sử dụng giá trị tìm được của x để tìm giá trị của y rồi viết 
      nghiệm của hệ phương trình đã cho.</p>
    `,
        answers: [
          { index: 0, ans: "(2; 1)", type: true },
          { index: 1, ans: "(3; 0)", type: false },
          { index: 2, ans: "(1; 2)", type: false },
          { index: 3, ans: "(-1; 4)", type: false },
        ],
        explain: `
      1. Từ phương trình thứ nhất ta có y = 3 - x.<br>
      2. Thế vào phương trình thứ hai, ta được<br>
      2x - 3(3 - x) = 1, hay 2x - 9 + 3x = 1, nên 5x = 10, suy ra x = 2.<br>
      Từ đó y = 3 - 2 = 1.<br>
      Vậy hệ phương trình đã cho có nghiệm là (2; 1).
    `,
      },
      {
        question: `
      Giải hệ phương trình<br>
      <p class="highlight red indent">x - 3y = 2</p>
      <p class="highlight red indent">-2x + 5y = 1</p>
      bằng phương pháp thế
    `,
        answers: [
          { index: 0, ans: "(-13; -5)", type: true },
          { index: 1, ans: "(8; 6)", type: false },
          { index: 2, ans: "(1; 2)", type: false },
          { index: 3, ans: "(0; -2)", type: false },
        ],
        explain: `
      Từ phương trình thứ nhất ta có x = 3y + 2. Thế vào phương trình thứ hai, 
      ta được<br>
      -2(3y + 2) + 5y = 1, tức là -6y - 4 + 5y = 1, suy ra -y = 5 hay y = -5.<br>
      Từ đó x = 3 . (-5) + 2 = -13.<br>
      Vậy hệ phương trình đã cho có nghiệm là (-13; -5).
    `,
      },
      {
        question: `
      Một mảnh vườn được đánh thành nhiều luống, mỗi luống trồng cùng một số 
      cây cải bắp. Hãy tính số cây cải bắp được trồng trên mảnh vườn đó, biết 
      rằng:<br>
      - Nếu tăng thêm 8 luống, nhưng mỗi luống trồng ít đi 3 cây cải bắp thì số 
      cải bắp của cả vườn sẽ ít đi 108 cây;<br>
      - Nếu giảm đi 4 luống, nhưng mỗi luống trồng thêm 2 cây thì số cải bắp cả 
      vườn sẽ tăng thêm 64 cây.<br>
    `,
        answers: [
          { index: 0, ans: "11088", type: true },
          { index: 1, ans: "13209", type: false },
          { index: 2, ans: "12913", type: false },
          { index: 3, ans: "9009", type: false },
        ],
        explain: `
      Gọi x là số luống trong vườn, y là số cây cải bắp trồng ở mỗi luống
      (x, y ∈ N*)<br><br>
      ...
      Vậy số cây cải bắp được trồng trên mảnh vườn đó là: 168 . 66 = 
      11088 (cây).<br>
    `,
      },
    ],
    level2: [
      {
        question: `
            Giải hệ phương trình<br>
            <p class="highlight red indent">3x + 2y = 6</p>
            <p class="highlight red indent">2x - 2y = 14</p>
            bằng phương pháp cộng đại số
        `,
        answers: [
          { index: 1, ans: "(4; -3)", type: true },
          { index: 2, ans: "(1; 2)", type: false },
          { index: 3, ans: "(4; 0)", type: false },
          { index: 4, ans: "(3; -4)", type: false },
        ],
        explain: `
            Cộng từng vế của hai phương trình ta được 3x + 2y + 2x - 2y = 20 
            hay 5x = 20, suy ra x = 4.<br><br>
            Thế x = 4 vào phương trình thứ nhất, ta được 3 . 4 + 2y = 6 
            hay 2y = -6, suy ra y = -3.<br><br>
            Vậy hệ phương trình đã cho có nghiệm là (4; -3).<br><br>
        `,
      },
      {
        question: `
            Giải hệ phương trình<br>
            <p class="highlight red">0,3x + 0,5y = 3</p>
            <p class="highlight red">1,5x - 2y = 1,5</p>
            bằng phương pháp cộng đại số
        `,
        answers: [
          { index: 1, ans: "(5; 3)", type: true },
          { index: 2, ans: "(4; 6)", type: false },
          { index: 3, ans: "(-2; 7)", type: false },
          { index: 4, ans: "(1; 1)", type: false },
        ],
        explain: `
            Nhân hai vế của phương trình thứ nhất với 10 và nhân hai vế 
            của phương trình thứ hai với 2, ta được:<br>
            <p class="highlight red indent">3x + 5y = 30</p>
            <p class="highlight red indent">3x - 4y = 3</p><br>
            Trừ từng vế hai phương trình của hệ mới, ta được 9y = 27 hay y = 3.<br><br>
            Thế y = 3 vào phương trình thứ hai của hệ mới, ta có 3x - 4 . 3 = 3 hay 3x = 15, suy ra x = 5.<br><br>
            Vậy hệ phương trình đã cho có nghiệm là (5; 3).
        `,
      },
    ],
    level3: [
      {
        question: `
            Giải hệ phương trình<br>
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-2m²x + 9y = 3(m + 3)</p>
            trong trường hợp m = -2
        `,
        answers: [
          {
            index: 0,
            ans: "(-<sup>12</sup>/<sub>5</sub>; -<sup>9</sup>/<sub>5</sub>)",
            type: true,
          },
          { index: 1, ans: "Vô nghiệm", type: false },
          { index: 2, ans: "(3; 2)", type: false },
          { index: 3, ans: "(-1; 5)", type: false },
        ],
        explain: `
            Với m = -2 ta có hệ phương trình
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-8x + 9y = 3</p><br>
            Nhân hai vế của phương trình thứ nhất với 4, ta được:<br>
            <p class="highlight red indent">8x - 4y = -12</p>
            <p class="highlight red indent">-8x + 9y = 3</p><br>
            Cộng từng vế hai phương trình của hệ mới, ta được 5y = -9 hay 
            y = -<sup>9</sup>/<sub>5</sub><br><br>
            Thế y = -<sup>9</sup>/<sub>5</sub> vào phương trình thứ nhất của hệ
            đã cho, ta có 2x + <sup>9</sup>/<sub>5</sub> = -3 hay
            2x = -<sup>24</sup>/<sub>5</sub>, suy ra
            x = -<sup>12</sup>/<sub>5</sub><br><br>
            Vậy hệ phương trình đã cho có nghiệm là
            (-<sup>12</sup>/<sub>5</sub>; -<sup>9</sup>/<sub>5</sub>)
        `,
      },
      {
        question: `
            Giải hệ phương trình<br>
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-2m²x + 9y = 3(m + 3)</p>
            trong trường hợp m = -3
        `,
        answers: [
          { index: 0, ans: "Vô nghiệm", type: true },
          { index: 1, ans: "(-3; -2)", type: false },
          { index: 2, ans: "(5; 5)", type: false },
          { index: 3, ans: "(-1; 6)", type: false },
        ],
        explain: `
            Với m = -3 ta có hệ phương trình
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-18x + 9y = 0</p><br>
            Chia hai vế của phương trình thứ hai cho 9, ta được:<br>
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-2x + y = 0</p><br>
            Cộng từng vế hai phương trình của hệ mới, ta được 
            0x + 0y = -3 (1)<br><br>
            Do không có giá trị nào của x và y thỏa mãn hệ thức (1) nên hệ phương 
            trình đã cho vô nghiệm.
        `,
      },
      {
        question: `
            Giải hệ phương trình<br>
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-2m²x + 9y = 3(m + 3)</p>
            trong trường hợp m = 3
        `,
        answers: [
          { index: 0, ans: "Vô nghiệm", type: true },
          { index: 1, ans: "(-3; -2)", type: false },
          { index: 2, ans: "(5; 5)", type: false },
          { index: 3, ans: "(-1; 6)", type: false },
        ],
        explain: `
            Với m = 3 ta có hệ phương trình
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-18x + 9y = 18</p><br>
            Chia hai vế của phương trình thứ hai cho 9, ta được:<br>
            <p class="highlight red indent">2x - y = -3</p>
            <p class="highlight red indent">-2x + y = 2</p><br>
            Cộng từng vế hai phương trình của hệ mới, ta được 
            0x + 0y = -1 (1)<br><br>
            Do không có giá trị nào của x và y thỏa mãn hệ thức (1) nên hệ phương 
            trình đã cho vô nghiệm.
        `,
      },
    ],
    level4: [
      {
        question: `
            Cặp số nào sau đây là nghiệm của hệ phương trình<br>
            <p class="highlight red indent">5x + 7y = -1</p>
            <p class="highlight red indent">-3x + 2y = -5</p>
        `,
        answers: [
          { index: 0, ans: "(-3; 2)", type: true },
          { index: 1, ans: "(-1; 1)", type: false },
          { index: 2, ans: "(2; -3)", type: false },
          { index: 3, ans: "(5; 5)", type: false },
        ],
        explain: `
            Nhân hai vế của phương trình thứ nhất với 3 và nhân hai vế của 
            phương trình thứ hai với 5, ta được: <br>
            <p class="highlight red indent">15x + 21y = -3</p>
            <p class="highlight red indent">15x + 10y = -25</p>
            Trừ từng vế hai phương trình của hệ mới, ta được 11y = 22 
            hay y = 2.<br><br>
            Thế y = 2 vào phương trình thứ hai của hệ đã cho, ta có 
            3x + 2 . 2 = -5 hay 3x = -9, suy ra x = -3.<br><br>
            Do đó, hệ phương trình đã cho có nghiệm là (-3; 2).
        `,
      },
      {
        question: `
            Trên mặt phẳng tọa độ Oxy, cho các điểm A(1; 2), B(5; 6), C(2; 3), 
            D(-1; -1). Đường thẳng 4x - 3y = -1 đi qua hai điểm nào trong các 
            điểm đã cho?
        `,
        answers: [
          { index: 0, ans: "C và D", type: true },
          { index: 1, ans: "A và B", type: false },
          { index: 2, ans: "B và C", type: false },
          { index: 3, ans: "D và A", type: false },
        ],
        explain: `
            • Thay x = 1; y = 2 vào phương trình đường thẳng, ta có:<br><br>
            4 . 1 - 3 . 2 = 4 - 6 = -2 ≠ -1.<br><br>
            Suy ra đường thẳng 4x - 3y = -1 không đi qua A(1; 2).<br><br>
            • Thay x = 5; y = 6 vào phương trình đường thẳng, ta có:<br><br>
            4 . 5 - 3 . 6 = 20 - 18 = 2 ≠ -1.<br><br>
            Suy ra đường thẳng 4x - 3y = -1 không đi qua B(5; 6).<br><br>
            • Thay x = 2; y = 3 vào phương trình đường thẳng, ta có:<br><br>
            4 . 2 - 3 . 3 = 8 - 9 = -1.<br><br>
            Suy ra đường thẳng 4x - 3y = -1 đi qua C(2; 3) và D(-1; -1).
        `,
      },
      {
        question: `
            Tìm các hệ số x, y trong phản ứng hóa học đã được cân bằng sau:
            <p class="highlight red indent">4Al + xO<sub>2</sub> → 
            yAl<sub>2</sub>O<sub>3</sub></p>
        `,
        answers: [
          { index: 0, ans: "x = 3; y = 2", type: true },
          { index: 1, ans: "x = 1; y = 2", type: false },
          { index: 2, ans: "x = 1; y = 1", type: false },
          { index: 3, ans: "x = 2; y = 2", type: false },
        ],
        explain: `
            Vì số nguyên tử Al và O ở cả hai vế của phương trình phản ứng 
            bằng nhau nên ta có hệ phương trình<br>
            <p class="highlight red indent">4 = 2y</p>
            <p class="highlight red indent">2x = 3y</p><br>
            Suy ra:
            <p class="highlight red indent">y = 2</p>
            <p class="highlight red indent">x = 3</p><br>
        `,
      },
      {
        question: `
            Tìm a và b sao cho hệ phương trình<br>
            <p class="highlight red indent">ax + by = 1</p>
            <p class="highlight red indent">ax + (2 - b)y = 3</p><br>
            có nghiệm là (1; -2)
        `,
        answers: [
          { index: 0, ans: "a = 4; b = <sup>3</sup>/<sub>2</sub>", type: true },
          {
            index: 1,
            ans: "a = <sup>2</sup>/<sub>5</sub>; b = <sup>4</sup>/<sub>7</sub>",
            type: false,
          },
          { index: 2, ans: "a = 1; b = -2", type: false },
          {
            index: 3,
            ans: "Không có giá trị của a và b thoả mãn",
            type: false,
          },
        ],
        explain: `
            Hệ phương trình đã cho có nghiệm là (1; -2) nên ta có
            <p class="highlight red indent">a.1 + b.(-2) = 1</p>
            <p class="highlight red indent">a.1 + (2 - b).(-2) = 3</p><br>
            Suy ra<br>
            <p class="highlight red indent">a - 2b = 1</p>
            <p class="highlight red indent">a + 2b - 4 = 3</p><br>
            hay <br>
            <p class="highlight red indent">a - 2b = 1</p>
            <p class="highlight red indent">a + 2b = 7</p><br>
            Cộng từng vế hai phương trình của hệ mới, ta được 2a = 8 hay a = 4.<br><br>
            Thế a = 4 vào phương trình thứ nhất của hệ mới, ta có 4 - 2b = 1 
            hay 2b = 3, suy ra b = <sup>3</sup>/<sub>2</sub><br><br>
            Vậy a = 4 và b = <sup>3</sup>/<sub>2</sub>
        `,
      },
    ],
  },
  unit3: {},
};
