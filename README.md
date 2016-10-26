# f-touch
轻量级原生移动端touch事件
```
主要功能:
1.支持tap、longtap、swipeLeft、swipeRight事件
2.无依赖
```
### 如何使用
```
<script src="path/f-touch.js"></script>
<script>
	var ele = document.getElementById('id');
	ele.addEventListener('tap', function(){}, false);
	ele.addEventListener('longtap', function(){}, false);
	ele.addEventListener('swipeLeft', function(){}, false);
	ele.addEventListener('swipeRight', function(){}, false);
</script>
```

