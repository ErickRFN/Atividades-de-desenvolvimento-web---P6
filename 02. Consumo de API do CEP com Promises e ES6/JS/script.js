// Função para buscar o CEP na API do ViaCEP
const buscarCEP = async () => {
  const cep = document.getElementById('cep');
  const cepSemEspaco = cep.replace(" ", "");// Remove espaços extras
  const cepSemTraco = cepSemEspaco.replace("-",""); // Remove o -

  // Só aceitar cep de 8 dígitos
  if (!/^\d{8}$/.test(cepSemTraco)) {
      document.getElementById('output').innerHTML = 'Por favor, insira um CEP válido (8 dígitos numéricos).';
      return;
  }

  try {
      // Fazendo a requisição à API
      const response = await fetch(`https://viacep.com.br/ws/${cepSemTraco}/json/`);
      const data = await response.json();

      // Verifica se o CEP retornou um erro
      if (data.erro) {
          document.getElementById('output').innerHTML = 'CEP não encontrado!';
      } else {
          // Exibe os dados do CEP consultado
          document.getElementById('output').innerHTML = `
              <strong>Logradouro:</strong> ${data.logradouro || 'Não disponível'} <br>
              <strong>Bairro:</strong> ${data.bairro || 'Não disponível'} <br>
              <strong>Cidade:</strong> ${data.localidade || 'Não disponível'} <br>
              <strong>Estado:</strong> ${data.uf || 'Não disponível'} <br>
          `;

          // Exibe o resultado
          document.getElementById('result').classList.add('show');
      }
  } catch (error) {
      // Em caso de erro na requisição ou qualquer outra falha
      document.getElementById('output').innerHTML = 'Erro ao consultar o CEP!';
      console.error('Erro:', error);
  }
};

// Adiciona o evento de clique ao botão
document.getElementById('search').addEventListener('click', () => {
  buscarCEP();
});
