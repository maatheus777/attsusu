function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  
  function salvarCadastro(event) {
    event.preventDefault();
  
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
  
    
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("senha", senha);
  
    alert("Seu cadastro foi realizado");
  
    
    closeModal();
    window.location.href = "perfil.html";
  }

 
    // Exibir os dados salvos no localStorage
    document.getElementById("perfil-nome").textContent = localStorage.getItem("nome");
    document.getElementById("perfil-email").textContent = localStorage.getItem("email");
    document.getElementById("perfil-telefone").textContent = localStorage.getItem("telefone");
    document.getElementById("perfil-cpf").textContent = localStorage.getItem("cpf");
 