# Design Patterns

Este repositório contém exemplos de implementação dos padrões de projeto (Design Patterns) do GoF (Gang of Four) em TypeScript.

Os padrões estão divididos em três categorias principais:

## 🏭 Padrões Criacionais (Creational Patterns)
Lidam com os mecanismos de criação de objetos, buscando instanciar objetos de maneira adequada à situação.

*   **[Abstract Factory](./src/creational/abstract-factory)**: Permite criar famílias de objetos relacionados sem especificar suas classes concretas.
*   **[Builder](./src/creational/builder)**: Separa a construção de um objeto complexo da sua representação, permitindo criar diferentes representações com o mesmo processo de construção.
*   **[Factory Method](./src/creational/factory-method)**: Define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar.
*   **[Prototype](./src/creational/prototype)**: Especifica os tipos de objetos a serem criados usando uma instância prototípica e cria novos objetos copiando este protótipo.
*   **[Singleton](./src/creational/singleton)**: Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

## 🏗️ Padrões Estruturais (Structural Patterns)
Lidam com a composição de classes ou objetos, facilitando o design ao identificar maneiras simples de realizar relacionamentos entre entidades.

*   **[Adapter](./src/structural/adapter)**: Converte a interface de uma classe em outra interface esperada pelos clientes. Permite que classes com interfaces incompatíveis trabalhem em conjunto.
*   **[Bridge](./src/structural/bridge)**: Desacopla uma abstração da sua implementação para que as duas possam variar independentemente.
*   **[Composite](./src/structural/composite)**: Compõe objetos em estruturas de árvore para representar hierarquias partes-todo. Permite que os clientes tratem objetos individuais e composições de objetos de maneira uniforme.
*   **[Decorator](./src/structural/decorator)**: Anexa responsabilidades adicionais a um objeto dinamicamente. Fornece uma alternativa flexível à herança para estender funcionalidades.
*   **[Facade](./src/structural/facade)**: Fornece uma interface unificada para um conjunto de interfaces em um subsistema. Define uma interface de nível mais alto que torna o subsistema mais fácil de usar.
*   **[Flyweight](./src/structural/flyweight)**: Usa compartilhamento para suportar eficientemente grandes quantidades de objetos de granulação fina.
*   **[Proxy](./src/structural/proxy)**: Fornece um substituto ou espaço reservado para outro objeto para controlar o acesso a ele.

## 🔄 Padrões Comportamentais (Behavioral Patterns)
Lidam com as responsabilidades e a comunicação entre os objetos.

*   **[Chain of Responsibility](./src/behavioral/chain-of-responsibility)**: Evita o acoplamento do remetente de uma solicitação ao seu receptor, dando a mais de um objeto a chance de lidar com a solicitação.
*   **[Command](./src/behavioral/command)**: Encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar ou registrar solicitações e suportar operações que podem ser desfeitas.
*   **[Interpreter](./src/behavioral/interpreter)**: Dada uma linguagem, define uma representação para sua gramática junto com um interpretador que usa a representação para interpretar sentenças na linguagem.
*   **[Iterator](./src/behavioral/iterator)**: Fornece uma maneira de acessar os elementos de um objeto agregado sequencialmente sem expor sua representação subjacente.
*   **[Mediator](./src/behavioral/mediator)**: Define um objeto que encapsula como um conjunto de objetos interage. Promove o acoplamento fraco evitando que os objetos se refiram uns aos outros explicitamente.
*   **[Memento](./src/behavioral/memento)**: Sem violar o encapsulamento, captura e externaliza o estado interno de um objeto para que o objeto possa ser restaurado a esse estado mais tarde.
*   **[Observer](./src/behavioral/observer)**: Define uma dependência um-para-muitos entre objetos para que, quando um objeto muda de estado, todos os seus dependentes sejam notificados e atualizados automaticamente.
*   **[State](./src/behavioral/state)**: Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado de classe.
*   **[Strategy](./src/behavioral/strategy)**: Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis. Permite que o algoritmo varie independentemente dos clientes que o utilizam.
*   **[Template Method](./src/behavioral/template-method)**: Define o esqueleto de um algoritmo em uma operação, deferindo algumas etapas para as subclasses. Permite que as subclasses redefinam certas etapas de um algoritmo sem alterar sua estrutura.
*   **[Visitor](./src/behavioral/visitor)**: Representa uma operação a ser realizada nos elementos de uma estrutura de objetos. Permite definir uma nova operação sem alterar as classes dos elementos nos quais opera.
