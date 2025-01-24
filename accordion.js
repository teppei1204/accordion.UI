(() =>{

  class Accordion {
      //初期化
      constructor(obj){

        console.log('obj', obj.hookName);

        const $elm = document.querySelector(obj.hookName)
        const $trigger = $elm.getElementsByTagName(obj.tagName);

        const triggerLen = $trigger.length;
        let index = 0;
        while (index < triggerLen) {
          $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
          index++;                                //クラスの中で関数を指定した時はthisを入れなければならない
        }                                         //this=クラスそのものを参照する クラスの中で関数を呼びたい時はthisを使う
      }

      //クリックしたら実行される処理
      clickHandler(e) {
        e.preventDefault();

        const $target = e.currentTarget;
        const $content = $target.nextElementSibling;
        if($content.style.display === 'block'){
          $content.style.display = 'none';
        } else {
          $content.style.display = 'block';
        }
    };
  }
  //インスタンスを生成する時は変数を必ず指定する
  const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const dummyAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
  });

  const miniAccordion = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
  });
  
})();