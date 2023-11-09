Для реализации фильтрации `div` элементов в DOM структуре на основе нажатия кнопок с использованием ключевого слова, вы можете применить следующий подход:

1. Создайте функцию для фильтрации элементов. В этой функции вы будете сравнивать значение ключевого слова с атрибутом данных `data-filter` каждого `div` элемента. Если ключевое слово совпадает с атрибутом данных, то элемент будет отображаться, в противном случае он будет скрыт:

```javascript
function filterElements(keyword) {
  const elements = document.getElementsByClassName('filterable');

  Array.from(elements).forEach(element => {
    const data = element.getAttribute('data-filter');
    
    if (data.includes(keyword)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}
```

2. Создайте обработчик события для нажатия на кнопки фильтра. Внутри обработчика события получите ключевое слово из текста нажатой кнопки и вызовите функцию `filterElements()` с этим ключевым словом:

```javascript
const filterButtons = document.getElementsByClassName('button-filter');

Array.from(filterButtons).forEach(button => {
  button.addEventListener('click', () => {
    const keyword = button.textContent;
    filterElements(keyword);
  });
});
```

3. В вашей разметке пометьте `div` элементы, которые могут быть отфильтрованы, атрибутом данных `data-filter`. Например:

```html
<div class="filterable" data-filter="young cow fresh round">...</div>
<div class="filterable" data-filter="mature cow hard spicy">...</div>
<div class="filterable" data-filter="young sheep soft creamy">...</div>
...
```

4. Убедитесь, что ваш HTML-код содержит кнопки фильтра с классом `button-filter` и текстом, соответствующим ключевым словам фильтра. Например:

```html
<button class="button-filter">young</button>
<button class="button-filter">mature</button>
<button class="button-filter">cow</button>
<button class="button-filter">sheep</button>
...
```

Теперь, при нажатии на кнопки фильтра, `div` элементы будут фильтроваться на основе ключевого слова кнопки. Те элементы, у которых атрибут данных `data-filter` совпадает с ключевым словом, будут отображаться, а остальные будут скрыты.

Надеюсь, это поможет вам реализовать фильтрацию `div` элементов в вашей DOM структуре на основе нажатия кнопок с ключевыми словами!