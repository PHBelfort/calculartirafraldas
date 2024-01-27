function calcularDivisao() {
        var valorA = parseFloat(document.getElementById('a').value);
        var valorB = parseFloat(document.getElementById('b').value);
        var valorC = parseFloat(document.getElementById('c').value);
        var valorD = parseFloat(document.getElementById('d').value);
        var valorE = parseFloat(document.getElementById('e').value);
        var valorF = parseFloat(document.getElementById('f').value);
        var valorG = parseFloat(document.getElementById('g').value);
        var valorPM = parseFloat(document.getElementById('pm').value);
        var valorGGX = parseFloat(document.getElementById('ggx').value);
        var valorGEG = parseFloat(document.getElementById('geg').value);

        if (isNaN(valorA)) {
        alert('Por favor, insira o valor do Produto.');
            return;
        }

        var resultadoB = !isNaN(valorB) ? (valorA / valorB).toFixed(2).replace('.', ',') : '';
        var resultadoC = !isNaN(valorC) ? (valorA / valorC).toFixed(2).replace('.', ',') : '';
        var resultadoD = !isNaN(valorD) ? (valorA / valorD).toFixed(2).replace('.', ',') : '';
        var resultadoE = !isNaN(valorE) ? (valorA / valorE).toFixed(2).replace('.', ',') : '';
        var resultadoF = !isNaN(valorF) ? (valorA / valorF).toFixed(2).replace('.', ',') : '';
        var resultadoG = !isNaN(valorG) ? (valorA / valorG).toFixed(2).replace('.', ',') : '';
        var resultadoPM = !isNaN(valorPM) ? (valorA / valorPM).toFixed(2).replace('.', ',') : '';
        var resultadoGGX = !isNaN(valorGGX) ? (valorA / valorGGX).toFixed(2).replace('.', ',') : '';
        var resultadoGEG = !isNaN(valorGEG) ? (valorA / valorGEG).toFixed(2).replace('.', ',') : '';

        document.getElementById('resultadoB').innerText = ' ' + resultadoB;
        document.getElementById('resultadoC').innerText = ' ' + resultadoC;
        document.getElementById('resultadoD').innerText = ' ' + resultadoD;
        document.getElementById('resultadoE').innerText = ' ' + resultadoE;
        document.getElementById('resultadoF').innerText = ' ' + resultadoF;
        document.getElementById('resultadoG').innerText = ' ' + resultadoG;
        document.getElementById('resultadoPM').innerText = ' ' + resultadoPM;
        document.getElementById('resultadoGGX').innerText = ' ' + resultadoGGX;
        document.getElementById('resultadoGEG').innerText = ' ' + resultadoGEG;
    }

    function limparCampos() {
        document.getElementById('a').value = '';
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('d').value = '';
        document.getElementById('e').value = '';
        document.getElementById('f').value = '';
        document.getElementById('g').value = '';
        document.getElementById('pm').value = '';
        document.getElementById('ggx').value = '';
        document.getElementById('geg').value = '';

        document.getElementById('resultadoB').innerText = '';
        document.getElementById('resultadoC').innerText = '';
        document.getElementById('resultadoD').innerText = '';
        document.getElementById('resultadoE').innerText = '';
        document.getElementById('resultadoF').innerText = '';
        document.getElementById('resultadoG').innerText = '';
        document.getElementById('resultadoPM').innerText = '';
        document.getElementById('resultadoGGX').innerText = '';
        document.getElementById('resultadoGEG').innerText = '';
    }

    function manterValores() {
        var valores = {
            'b': document.getElementById('b').value,
            'c': document.getElementById('c').value,
            'd': document.getElementById('d').value,
            'e': document.getElementById('e').value,
            'f': document.getElementById('f').value,
            'g': document.getElementById('g').value,
            'pm': document.getElementById('pm').value,
            'ggx': document.getElementById('ggx').value,
            'geg': document.getElementById('geg').value,
            'resultadoB': document.getElementById('resultadoB').innerText,
            'resultadoC': document.getElementById('resultadoC').innerText,
            'resultadoD': document.getElementById('resultadoD').innerText,
            'resultadoE': document.getElementById('resultadoE').innerText,
            'resultadoF': document.getElementById('resultadoF').innerText,
            'resultadoG': document.getElementById('resultadoG').innerText,
            'resultadoPM': document.getElementById('resultadoPM').innerText,
            'resultadoGGX': document.getElementById('resultadoGGX').innerText,
            'resultadoGEG': document.getElementById('resultadoGEG').innerText,
        };

        sessionStorage.setItem('valores', JSON.stringify(valores));
    }

    function imprimirConteudo() {
            // Criar um elemento temporário para conter apenas os campos preenchidos
            var conteudoDiv = document.createElement('div');
            conteudoDiv.id = 'tiraExport';

            // Mapear os tamanhos para seus respectivos nomes
        var tamanhoNomes = {
            'b': 'P',
            'c': 'M',
            'd': 'G',
            'e': 'XG',
            'f': 'XXG',
            'g': 'RN',
            'pm': 'P/M',
            'ggx': 'G/XG',
            'geg': 'G/EG'
        };

        // Iterar sobre os campos e adicionar apenas os preenchidos ao elemento temporário
        var campos = ['b', 'c', 'd', 'e', 'f', 'g', 'pm', 'ggx', 'geg'];
        campos.forEach(function (campo) {
            var valorCampo = document.getElementById(campo).value.trim();
            if (valorCampo !== '') {
                var divCampo = document.createElement('div');
                divCampo.className = 'size-input';

                var labelCampo = document.createElement('label');
                labelCampo.htmlFor = campo;
                labelCampo.innerText = tamanhoNomes[campo]; // Correção aqui

                var inputCampo = document.createElement('input');
                inputCampo.type = 'number';
                inputCampo.id = campo;
                inputCampo.step = 'any';
                inputCampo.placeholder = 'Qdt';
                inputCampo.value = valorCampo;

                var spanResultado = document.createElement('span');
                spanResultado.className = 'resultado';
                spanResultado.id = 'resultado' + campo.toUpperCase();

                // Adicionar a lógica de cálculo aqui
                var valorA = parseFloat(document.getElementById('a').value);
                var valorCampoNum = parseFloat(valorCampo);
                var resultadoCampo = !isNaN(valorCampoNum) ? (valorA / valorCampoNum).toFixed(2).replace('.', ',') : '';
                spanResultado.innerText = ' ' + resultadoCampo;

                divCampo.appendChild(labelCampo);
                divCampo.appendChild(inputCampo);
                divCampo.appendChild(spanResultado);

                conteudoDiv.appendChild(divCampo);
            }
        });

            // Limpar o conteúdo do corpo da página
            document.body.innerHTML = '';

            // Adicionar o elemento temporário com os campos preenchidos ao corpo da página
            document.body.appendChild(conteudoDiv);

            // Imprimir o conteúdo
            window.print();

            // Recarregar a página
            location.reload();

            // Remover a classe temporária após a impressão
            document.body.classList.remove('imprimir');
    }