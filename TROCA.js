<!-- Exemplo do HTML antes da substituição -->
<span class="a-CardView-icon u-color fa fa-user-circle" aria-hidden="true" title=""></span>

<script>
// Função para substituir o <span> por uma <img> com ID
function substituirSpanPorImg() {
  // Crie um elemento <img>
  const imgElement = document.createElement('img');

  // Defina o atributo src com o URL da imagem desejada
  imgElement.src = 'caminho/para/sua/imagem.jpg';

  // Defina o ID desejado para a imagem
  imgElement.id = 'seu-id-de-imagem'; // Por exemplo, defina o ID da imagem

  // Defina outras classes ou atributos desejados para a imagem (se necessário)
  imgElement.className = 'sua-classe-de-imagem'; // Por exemplo, defina a classe da imagem

  // Localize o elemento <span> que deseja substituir
  const spanElement = document.querySelector('span.a-CardView-icon');

  // Verifique se encontrou o elemento <span>
  if (spanElement) {
    // Substitua o <span> pelo <img>
    spanElement.replaceWith(imgElement);
  }
}

// Chame a função para fazer a substituição
substituirSpanPorImg();
</script>
