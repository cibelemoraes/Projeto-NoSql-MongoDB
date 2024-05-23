// índices das coleções

/*
1.Índice na Coleção Atendimento para o campo data_atendimento:

Este índice é útil se você planeja realizar consultas frequentes baseadas na data de atendimento. A indexação desse campo facilitará a ordenação e a busca eficiente por atendimentos em um intervalo de datas específico.

*/
db.Atendimento.createIndex({ "data_atendimento": 1 })

/*
2. Índice Composto na Coleção Atendimento para os campos funcionario._id e cliente._id:

Se você planeja realizar consultas frequentes que envolvem a filtragem de atendimentos por funcionário e cliente, este índice composto ajudará a melhorar o desempenho dessas consultas. Ele permite que o MongoDB execute buscas eficientes usando ambos os campos.

*/
db.Atendimento.createIndex({ "funcionario._id": 1, "cliente._id": 1 })