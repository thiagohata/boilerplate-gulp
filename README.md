# Boilerplate-web com Gulp

Depois de um tempo usando [Grunt](http://gruntjs.com/), migrei o meu bolierplate para o Gulp. Fiz algumas alterações no boilerplate.

O [Antigo Boilerplate](https://github.com/thiagohata/boilerplate-web) não vou mais atualizar.

## Mudanças

Dois aspectos que me fizeram mudar.

- A rapidez do Gulp em relação ao Grunt. Viva o mundo do asynchronous \o/.
- Estudando um pouco mais de framework MVC(Angular), conseguir que o Boilerplate conseguisse se moldar a uma estrutura web como uma SPA(Single Page Application). Conseguir usar em um projeto web simples javascript puro, outros projetos com jQuery em outros com Angular. Mais abaixo eu conto o que mudei. 

Use a vontade, faça o fork e se quiser contribua com pull requests.

O que precisa para rodar

**Depedências:**

- [Git](https://git-scm.com/)
- [Ruby](https://www.ruby-lang.org/pt/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) 
- [Bower](http://bower.io/)
- [Gulp](http://gulpjs.com/)
- [Sass](http://sass-lang.com/)


Pensando que já tem as depedências instaladas na máquina.

**Modo de usar:**

1 - Clone o repositório ou faça o download.

2 - Acesse via terminal o diretório clonado ou baixado.

3 - No terminal instale os módulos necessários para o projeto.

	$ [sudo] npm install	

4 - Rode o servidor:

	$ gulp server

5 - Para gerar os arquivos (concatenados, minificados e otimizados )
	
	$ grunt
	
6 - Caso não queira os html's minificados
	
	$ grunt	deploy


## Como foi desenvolvido esse Boilerplate.

Criei esse bolierplate para startar projetos que utilizo para web e SPA. 

Depois de usar muitos Boilerplate /scaffolding  prontos por ai, algumas vezes faltavam coisas ou as vezes tinham muita coisa, resolvi fazer um Boilerplate rápido que atendesse as necessidades básicas
de um projeto.


## Bibliotecas

Uso o Bower como gerenciador de depedência, se usa NPM fique a vontade.
A única biblioteca que importei para dentro do projeto é a modernizer.
Fique a vontade de retirar ou adicionar outras.

Para ajudar e não ficar sofrendo, as principais bibliotecas(jQuery, Angular, Underscore, Bootstrap, Materialize, Angular Material) já foram instaladas estão localizadas na pasta **bower_components**. Basta fazer o link nos arquivos. 


## Estrutura de Arquivos

- **/app** 
	Onde ficam os arquivos de produção. Ao subir o servidor
	
		gulp server
	
	Você sobe um server com [Browsersync](https://browsersync.io/). A aplicação monitora os javascripts da aplicação e os arquivos SASS e CSS.

   **/app/sass**: Fique a vontade de usar sua técnica de modularização seja ela AtomicCSS, Bem, Smacss, DryCss, OOCSS, BEM. Já vi e estudei um pouco de todas, mas não aplico nenhuma afundo. O que mais simpatizo é a SMACSS, então você pode enxergar um pouco de Smacss na modularização. Não existe uma regra e ela pode ser mudada para otimizar o seu workflow.

   **/app/js/**: Organização do javascript, não criei nenhuma estrutura de pastas. Fique a vontade para organizar o seu javascript da forma que preferir.


- **/bower_components:** Onde ficam os arquivos de vendor, biblioteca de terceiros que ajudam no projeto.

**/dist** Os arquivos finais compilados (concatenados, minificados e otimizados )

**/node_modules** módulos que o gulp requer para realizar suas tarefas.

**/spec** Pasta onde ficam os testes  criados para aplicação. 






