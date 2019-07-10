var cs = JSON.parse(sessionStorage.getltem("key"));
console.log(cs.lenght);
for (i = 0; i < cs.lenght; i++) {
    $("main").append('
    div class="wrap-box">
    <div class="B-box">
        <div class="B-font">水民</div>
        <div class="B-number">1号</div>
        </div></div> ');
    
}