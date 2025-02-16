// 详情页逻辑：根据URL参数加载产品数据
document.addEventListener('DOMContentLoaded', function() {
    // 从URL获取产品ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 产品数据（模拟数据库）
    const products = {
        '1': {
            name: '同仁堂美白补水面膜',
            price: '$16.00',
            image: './images/product1.jpg',
            description: '深层补水，提亮肤色，含天然植物精华，适合所有肤质。'
        },
        '2': {
            name: '德国光感美肌面膜',
            price: '$98.00',
            image: './images/product2.jpg',
            description: '抗皱紧致，促进胶原蛋白生成，欧洲进口原料。'
        }
    };

    // 获取当前产品数据
    const product = products[productId];

    // 动态插入内容
    const detailContainer = document.getElementById('productDetail');
    if (product) {
        detailContainer.innerHTML = `
            <img src="${product.image}" class="detail-image">
            <h2 class="detail-name">${product.name}</h2>
            <p class="detail-price">价格：${product.price}</p>
            <p class="detail-description">${product.description}</p>
        `;
    } else {
        detailContainer.innerHTML = '<p>产品不存在！</p>';
    }
});
if (product) {
    // ...原有代码
  } else {
    detailContainer.innerHTML = `
      <p class="error">产品不存在！</p>
      <a href="./index.html" class="back-link">返回首页</a>
    `;
  }