# CineVideo
Um projeto em React Js de um site de filmes onde você pode conferir as sinopses, salvar os filmes em uma lista de favoritos e conferir os trailers.
O projeto foi criado com base na aula do professor <strong>Matheus Fraga</strong> do curso <strong>React Js do zero ao avançado na prática</strong> na udemy.

https://user-images.githubusercontent.com/70671093/157311554-b50a96c8-cfa7-474b-9821-884cf2591dfe.mp4


# O projeto

### react-router-dom
Fazendo uso do <strong>BrownserRouter, Routes e Route</strong>, criei rotas para as três páginas, sendo a principal onde mostra o catálogo de filmes, a segundo que mostra a sinopse e 
que te da a opção de adicionar o mesmo em sua lista ou até mesmo ver o trailer através de um link externo que direciona para o youtube já com o trailer do filme em questão.

![image](https://user-images.githubusercontent.com/70671093/157314082-dd89a7bc-dbcd-43ef-9450-f3dc61ae6029.png)


### Organização do projeto
Seguindo a proposta da lib, organizei os arquivos em suas pastas correspondêntes; como uma pasta para organizar somente as páginas, outra para os componentes e assim por diante.

![image](https://user-images.githubusercontent.com/70671093/157312372-1c171261-6c65-4044-9ad7-0d52e670a1d6.png)

### api
Fiz uso da api fornecida pelo o professor a qual eu pude buscar os filmes e seus detalhes, assim como a imagem dos filmes correspondentes e através do método map eu percorri 
por cada elemento da array.

### hooks
Nesse projeto também, fiz uso de alguns hooks do react como o useState para receber os filmes fornecidos da api através do useEffect.
