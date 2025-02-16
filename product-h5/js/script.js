// 为每个产品添加点击事件
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function() {
        // 这里可以跳转到详情页或购买链接
        alert('跳转到产品详情页！');
    });
});