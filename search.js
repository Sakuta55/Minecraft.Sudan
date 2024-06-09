
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // لمنع إرسال النموذج بالطريقة التقليدية

    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // تفريغ نتائج البحث السابقة

    // بيانات وهمية للبحث (يمكنك استبدالها ببياناتك الفعلية)
    const data = [
        { title: 'إنشاء ، عمل ، انشاء ، حساب ، مايكروسوفت ', url: 'account_mine.html', content: 'الضغط هنا ☝️ ' },
        { title: ' تعلم، بدا، بدأ، تشغيل ماين كرافت، ', url: 'Start_Minecraft.html', content: 'اضغط هنا ☝️ .' },
        { title: ' تحميل، تنزيل، تثبيت ماين كرافت ', url: 'Download_Minecraft.html', content: ' اضغط هنا ☝️ .' },
    ];

    const results = data.filter(item => item.content.includes(query) || item.title.includes(query));

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h2 style="background-color:#80ffff;border-radius:30px;"> <a href="${result.url}">${result.title}</a><p>${result.content}</p>`;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = '<p>لم يتم العثور على نتائج.</p>';
    }
});


