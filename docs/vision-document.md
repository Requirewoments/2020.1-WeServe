# Documento de visão
## 1. Introdução:
### 1.1. Propósito:
O documento presente tem por objetivo fornecer uma visão ampla ao leitor do produto a ser desenvolvido, o software WeServe. Através da apresentação dos desafios e necessidades que o projeto levanta, bem como de suas funcionalidades, o leitor será capacitado a entender os tópicos abordados mesmo sem possuir conhecimentos técnicos sobre o software que se pretende desenvolver.

### 1.2. Escopo:
Este documento se limita a fornecer a todos os envolvidos uma descrição das funcionalidades que serão atendidas nesse projeto, como também restrições e critérios de qualidade para a sua implantação no meio alvo. Ainda descreve o ambiente em que o aplicativo será utilizado e seu relacionamento com os usuários e envolvidos.

### 1.3. Definições, acrônimos e abreviações:

### 1.4 Referências:
International Business Machines Corporation. Documento de Visão. Disponível em: <https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html>. Acesso em: 7 de novembro de 2020.

### 1.5 Visão geral:
O conteúdo desse documento está organizado de modo a fornecer uma visão dos envolvidos no projeto, das necessidades desses envolvidos, dos benefícios esperados por esses e das funcionalidades e suas características para atender a esses benefícios. Cabe ressaltar que as funcionalidades não serão detalhadas neste documento, sendo esta uma tarefa realizada na especificação de Caso de Uso.

## 2. Posicionamento:
### 2.1. Oportunidade de negócio
É conhecido os altos níveis históricos de desigualdade econômica no Brasil. Caracterizada pela distribuição desigual de renda em diversas regiões do Brasil, a desigualdade econômica se agravou com a chegada da Pandemia da COVID-19. Atualmente as políticas públicas brasileiras são ineficientes para eliminar o problema e o baixo poder de compra das classes baixas continua sem solução. De acordo com essa realidade, o aplicativo WeServe  tem por objetivo fornecer mais uma opção às pessoas em dificuldades financeiras para obterem os serviços desejados e tornar possível o acesso a serviços que antes não tinham. Cabe ressaltar que o aplicativo permite que pessoas de todas as classes façam a sua utilização e negociem serviços.

### 2.2. Descrição do problema:
<table>
    <tr>
        <td>O  problema de</td>
        <td>buscar por serviços de alto poder de compra</td>
    </tr>
    <tr>
        <td>afeta</td>
        <td>as classe baixas</td>
    </tr>
    <tr>
        <td>cujo impacto é</td>
        <td>privação de acesso a serviços fundamentais para suas vidas</td>
    </tr>
    <tr>
        <td>uma boa solução seria</td>
        <td>um sistema que permite que pessoas paguem por serviços que necessitam por meio do fornecimento de outro serviço</td>
    </tr>
</table>

### 2.3. Posicionamento

<table>
    <tr>
        <td>Para</td>
        <td>prestadores de serviços de todas as classes</td>
    </tr>
    <tr>
        <td>que</td>
        <td>necessitam de acessar serviços que possam ser pagos com seu poder de compra</td>
    </tr>
    <tr>
        <td>o</td>
        <td>WeServe</td>
    </tr>
    <tr>
        <td>que</td>
        <td>permite a busca por serviços e pagamento desses por meio de outro serviço</td>
    </tr>
    <tr>
        <td>diferente da</td>
        <td>rede social WinWe</td>
    </tr>
    <tr>
        <td>nosso produto</td>
        <td>permite fazer busca por serviços e retornar feedback dos resultados encontrados, possui melhor Usabilidade, funciona em dispositivos móveis (Android/IOS) e possui desempenho superior.</td>
    </tr>
</table>

## 3. Descrição da parte interessada e do usuário 
### 3.1. Resumo da parte interessada
| Nome | Descrição | Papel |
|------|-----------|-------|
|Equipe de Desenvolvimento|Grupo de alunos da UnB do curso Engenharia de Software matriculados na disciplina de Requisitos de Software.| Executar o planejamento e realizar o desenvolvimento, implantação e testes. |

### 3.2. Resumo do usuário

| Nome | Descrição |
|------|-----------|
| Prestadores de serviço | Prestadores de serviço de todas as classes. Utilizarão o aplicativo para anunciar e procurar por serviços. |

### 3.3. Ambiente do usuário
Para utilizar o aplicativo é necessário possuir um dispositivo Android ou IOS com conexão à Internet. As principais tarefas realizadas no aplicativo são o anúncio de serviço prestado, aceitação de proposta, busca por serviço desejado e negociação de proposta. As 3 primeiras tarefas necessitam de apenas um usuário para a sua conclusão, enquanto o último de dois usuários envolvidos.

### 3.4. Perfis da parte interessada
#### 3.4.1 Equipes de desenvolvimento
<table>
    <tr>
        <td>Representantes</td>
        <td>Gabrielle Ribeiro Gomes, Gustavo Afonso Severo, João Pedro Silva, Maicon Lucas Mares, Renato Britto, Victor Amaral</td>
    </tr>
    <tr>
        <td>Descrição</td>
        <td>Desenvolvedores de software</td>
    </tr>
    <tr>
        <td>Tipo</td>
        <td>Discentes da disciplina de Requisitos de Software na UnB.</td>
    </tr>
    <tr>
        <td>Critérios de sucesso</td>
        <td>Acompanhar os resultados e modificar a condução do planejamento se necessário e entregar o que for proposto cumprindo os prazos de entrega e mantendo a qualidade do produto.</td>
    </tr>
    <tr>
        <td>Envolvimento</td>
        <td>Está altamente envolvida no projeto atuando no desenvolvimento de software, bem como em todo o gerenciamento de projeto e de requisitos.</td>
    </tr>
    <tr>
        <td>Comentários/problemas</td>
        <td>Equipe inexperiente em gerenciamento de projetos e de requisitos, além de pouco conhecimento com algumas das ferramentas que serão utilizadas.</td>
    </tr>
</table>

### 3.5. Perfis de usuário
<table>
    <tr>
        <td>Representantes</td>
        <td>Prestadores de serviços de todas as classes.</td>
    </tr>
    <tr>
        <td>Tipo</td>
        <td>-</td>
    </tr>
    <tr>
        <td>Responsabilidades</td>
        <td>Com o aplicativo em uso este usuário poderá buscar por serviços desejados, fazer proposta e anunciar os serviços que prestam.</td>
    </tr>
    <tr>
        <td>Critérios de sucesso</td>
        <td>O aplicativo permitirá fazer a troca de serviços e relacionamento profissional entre os prestadores.</td>
    </tr>
    <tr>
        <td>Envolvimento</td>
        <td>Alto. Irão atuar ativamente no anúncio, busca, publicação e negociação de serviços.</td>
    </tr>
    <tr>
        <td>Comentários/problemas</td>
        <td>Inexperiência com plataformas digitais. Acesso a internet.</td>
    </tr>
</table>

### 3.6. Principais necessidades do usuário e da parte interessada 
#### 3.6.1. Necessidades da parte interessada
|Necessidade|Prioridade|Interesse|Solução proposta|Solução atual|
|-----------|----------|---------|----------------|-------------|
#### 3.6.2. Necessidades do usuário:
|Necessidade|Prioridade|Interesse|Solução proposta|Solução atual|
|-----------|----------|---------|----------------|-------------|

### 3.7. Alternativas e concorrência
#### 3.7.1 WinWe:
WinWe é uma plataforma web para troca de serviços, se assemelha com uma rede social. Permite a publicação de serviços prestados, entretanto, atualmente, está repleta de erros. Não há possibilidade de busca por serviços, a rede de usuários é pequena e a interface é desagradável. 

## 4. Visão geral do produto
### 4.1. Perspectiva do produto
O aplicativo WeServe terá como função auxiliar trabalhadores de diversas classes por meio de recursos que tornem possível negociar serviços, outra necessidade é que haja a avaliação de serviços prestados gerando confiança sobre prestadores.

### 4.2. Resumo dos recursos:
<table>
    <tr>
        <th>Benefícios para o cliente</th>
        <th>Recursos de suporte</th>
    </tr>
    <tr>
        <td>O usuário pode visualizar diversos serviços de uma mesma categoria e decidir entde diferentes opções.</td>
        <td>O Mural de Serviços permite agrupamento entde serviços mais buscados e em uma mesma categoria.</td>
    </tr>
    <tr>
        <td>Os usuários poderão gerenciar com facilidade os serviços que desejam ofertar.</td>
        <td>A criação, edição e exclusão de serviços é realizada facilmente no perfil do usuário.</td>
    </tr>
    <tr>
        <td>Será possível que o usuário faça uma proposta e negocie o serviço em questão.</td>
        <td>No Mural de serviços onde o serviço se encontra é possível realizar a proposta e, caso aceita, negociá-la por meio do Chat.</td>
    </tr>
    <tr>
        <td>Confiabilidade nos serviços e propostas.</td>
        <td>Uma equipe de administradores possuem permissão para exclusão, desativação e notificação de contas e propostas que não estiverem de acordo com os termos de uso. Bem como os usuários podem realizar denúncias.</td>
    </tr>
</table>

## 5. Recursos do produto

<table>
    <tr>
        <th>Recurso</th>
        <th>Definição do recurso</th>
    </tr>
    <tr>
        <td>Mural de serviços</td>
        <td>Haverão sessões, espécie de feed de notícias, para serviços mais buscados e serviços separados por categoria.</td>
    </tr>
    <tr>
        <td>Controle de serviços</td>
        <td>Os usuários cadastrados poderão cadastrar serviços que estão ofertando, editá-los e excluí-los. Qualquer usuário poderá buscar e filtrar serviços que deseja contratar.</td>
    </tr>
    <tr>
        <td>Propostas</td>
        <td>Os usuários logados poderão realizar uma proposta por serviço cadastrado em um mural de serviços a fim de oferecer seu serviço em troca.</td>
    </tr>
    <tr>
        <td>Chat</td>
        <td>Após a aceitação de uma proposta pelo anunciante do serviço cadastrado, ele poderá negociar com o proponente através de um chat.</td>
    </tr>
    <tr>
        <td>Avaliação de serviço</td>
        <td>A avaliação do serviço prestado será feita após a troca de serviços por quem realizou a proposta, caso este deseje.</td>
    </tr>
    <tr>
        <td>Controle de conta e propostas</td>
        <td>Administradores do sistema terão permissões para excluir, notificar e desativar temporariamente contas, como também propostas que ferem os termos de uso.</td>
    </tr>
</table>

## 6. Restrições
### 6.1. Restrições legais
Como dito anteriormente o nosso sistema se compromete a ser um mediador para trocas de serviços. Entretanto vale salientar a parte legal dessa troca. No Brasil algumas normas são reguladas pelo estado, como as trocas imobiliárias de acordo com a norma IN SRF 107/88. Conceitualmente a troca de serviços, conhecida como permuta, é quando as partes se obrigam a entregar algo um ao outro.

Dito isso é importante deixar alguns pontos importantes no ato da troca de serviços. Essa troca, por meio de um contrato é considerado, consensual (ambas as partes concordam), oneroso (tem a aplicação de valor,pois mesmo que não haja o pagamento em moeda corrente, o contrato não é gratuito) e bilateral (uma vez que têm-se direitos e deveres de ambas as partes). O sistema por meio do seu termo de uso deve deixar claro sobre essas características do contrato de troca.

Com relação a tributação, a legislação brasileira dá ênfase apenas nas trocas imobiliárias, cabendo a observação aos usuário nesse caso.

Por último, segundo o código civil, o contrato de permuta deve ser celebrado como um contrato de venda.

### 6.2. Restrições de design
O sistema é restrito pela própria linguagem de programação e seus recursos de design disponíveis.  Além disso objetiva-se que esteja claro e intuitivo o que ele precisa fazer para realizar as tarefas ou atingir os seus objetivos.

### 6.3 Restrições de implementação
A equipe é formada unicamente por alunos de Engenharia de Software da Universidade de Brasília - campus Gama matriculados no disciplina de Requisitos de Software. Dado isso há limitações técnicas, dado que não há especialistas nas ferramentas escolhidas e no tempo disponível pois os membros precisam dedicar um tempo aos seus outros projetos e matérias.

## 7. Faixa de qualidade:

<table>
    <tr>
        <th>Critério avaliado</th>
        <th>Faixa de qualidade</th>
    </tr>
    <tr>
        <td>Desempenho:</td>
        <td>Cada tarefa dentro dessa feature deve ser feita até 1 s sendo que acima de 0.1 s é recomendado a atualização do status ao usuário.</td>
    </tr>
    <tr>
        <td>Falhas:</td>
        <td>A feature não poderá ter falhas conhecidas</td>
    </tr>
    <tr>
        <td>Usabilidade:</td>
        <td>Deve ser bem explícito o que o usuário deve ou não fazer para cumprir o objetivo da feature.</td>
    </tr>
    <tr>
        <td>Portabilidade:</td>
        <td>As features funcionam bem em todos os ambientes de uso da aplicação.</td>
    </tr>
    <tr>
        <td>Reusabilidade</td>
        <td>Na medida do possível a feature deve aproveitar código já implementado e incorporado, a fim de evitar falhas e ampliar a forma de testá-las.</td>
    </tr>
    <tr>
        <td>Verificabilidade:</td>
        <td>O recurso deve ser verificável que atendeu todos os pontos do(s) requisito(s) a ele atrelado(s).</td>
    </tr>
    <tr>
        <td>Manutenabilidade</td>
        <td>A implementação deve seguir as boa práticas da linguagem, além de comentadas as partes mais cruciais.</td>
    </tr>
</table>

## 8. Atributos dos recursos:
Atributos de um recurso são características de um recurso as quais podemos usá-las para classificar, comparar, e atribuir prioridades entre outras coisas. Existem muitas possibilidades de atributos que podem estar relacionados a um recurso, mas para poder simplificar, escolhemos apenas alguns atributos que consideramos mais relevantes:

### 8.1 Status:
Avalia a posição do recurso dentro do sistema, suas escalas são:
- Proposta: quando um recurso é proposto, mas ainda não foi avaliado para entrar no projeto.
- Aprovado: quando o recurso é considerado útil e factível para implementação e incorporação no projeto.
- Incorporado: São os recurso que foram incorporado ao projeto. Em outras palavras, já fazem parte do produto.

### 8.2. Importância
Esse atributo destaca o nível de relevância que um recurso tem dentro de um projeto.
- Crítico: A feature é extremamente essencial. A falha desses recursos significam que as necessidades do cliente/usuário não serão atendidas.
- Importante: São recurso que a sua ausência pode afetar a satisfação do cliente/usuário e que não podem ser substituídos com alguma outra função facilmente.
- Útil: são recursos que agregam algum valor à aplicação mas que a sua falta não implica em uma significativa insatisfação.

### 8.3. Esforço
Esse atributo relata o esforço necessário para incorporar cada recurso ao projeto. Sua escala é dividida em:
- Alta: Grande dificuldade de implementar aquele recurso, sendo necessário muitas vezes um estudo mais elaborado, ou uma divisão em tarefas menores.
- Média: Tem uma certa dificuldade de se implementar, recomenda-se dividir em tarefas menores, mas não é extremamente necessário.
- Baixa: Pouca dificuldade, sendo quase desnecessário dividir em tarefas menores.

### 8.4. Risco
É um atributo que define o risco do recurso causar problemas no andamento do projeto, como atraso nas entregas, má implementação, entre outras. Sua escala é subdividida em:
- Alta: Tem muito risco de causar problemas, sendo necessário uma atenção maior e a alocação de mais recursos humanos.
- Média: Tem risco, mas se bem gerenciada fica sobre controle.
- Baixa: Risco baixo, mas ainda sendo necessário um certo nível de atenção.

## Referências:
<https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html> Acesso em 08/11/2020