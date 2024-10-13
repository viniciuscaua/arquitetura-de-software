## Questões

### 1. Quais são as principais desvantagens de concentrar toda a lógica, interface e dados em um único arquivo?

- **Dificuldade de manutenção**: Manter um único arquivo grande pode tornar a compreensão e modificação do código mais difícil, especialmente em projetos de maior escala, onde os desenvolvedores precisam navegar por todo o código para realizar uma simples alteração.
  
- **Pouca reutilização de código**: Em uma aplicação com toda a lógica centralizada, fica difícil reutilizar partes do código em outras áreas ou projetos.

- **Falta de modularidade**: Misturar lógica, dados e interface no mesmo arquivo dificulta a separação de responsabilidades, o que torna a aplicação mais suscetível a erros.

- **Escalabilidade limitada**: À medida que o projeto cresce, a estrutura monolítica se torna ineficaz, pois é difícil adicionar novas funcionalidades sem comprometer a integridade da aplicação.

### 2. Como a separação em camadas facilita a manutenção e a escalabilidade da aplicação?

- **Responsabilidades bem definidas**: Cada camada (apresentação, lógica de negócios e persistência de dados) tem uma função clara, o que facilita a identificação e correção de problemas específicos sem impactar outras partes do sistema.
  
- **Facilidade de testes**: Com camadas separadas, é possível testar cada componente de forma independente, garantindo que a aplicação funcione corretamente em cada estágio.

- **Escalabilidade**: Uma aplicação com camadas bem definidas permite que novas funcionalidades sejam adicionadas ou que partes do sistema sejam otimizadas sem modificar outras camadas. Por exemplo, a lógica de negócios pode ser alterada sem impactar a interface ou a forma como os dados são armazenados.

- **Reutilização de componentes**: Separando o código em camadas, é possível reutilizar componentes em outros projetos ou áreas da aplicação, promovendo a reutilização de código e melhorando a eficiência no desenvolvimento.

### 3. Quais são os principais benefícios da arquitetura Pipe e Filtros para sistemas que precisam de flexibilidade nas transformações de dados?

- **Composição modular**: Os filtros são unidades independentes, o que permite combinar e reorganizar filtros facilmente para criar novas cadeias de transformações sem afetar os demais componentes.

- **Facilidade de manutenção**: Cada filtro pode ser desenvolvido e mantido separadamente. Isso significa que atualizações ou correções em um filtro específico não impactam os demais, facilitando a evolução do sistema.

- **Reutilização de filtros**: Filtros criados para uma finalidade podem ser reutilizados em outras partes do sistema ou em outros sistemas que necessitem de transformações similares, promovendo a reutilização de código.

- **Pipeline expansível**: A arquitetura facilita a adição de novos filtros ao pipeline. Novos comportamentos podem ser introduzidos sem a necessidade de refatorar o código existente, o que contribui para a flexibilidade do sistema.

---
