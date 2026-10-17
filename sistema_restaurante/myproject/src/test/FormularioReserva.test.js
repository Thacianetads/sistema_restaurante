import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReservaForm } from '../components/ReservaForm';
describe('Componente ReservaForm', () => {
  
  test('deve renderizar todos os campos e o botão corretamente', () => {
    // o render renderiza os campos 
    render(<ReservaForm addReserva={() => {}} />);

    // o expect espera alguma afirmação ou checagem
    // toBeInTheDocument() confirma que o elemento está na tela
    // getBy... encontra esse elemento
    // com o screen podemos procurar e enxergar os elementos na tela
    expect(screen.getByPlaceholderText('Nome cliente')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Data')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Horario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Quantidade de pessoas')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /adicionar reserva/i })).toBeInTheDocument();
  });

  test('deve atualizar os valores dos inputs quando o usuário digitar', () => {
    // o render renderiza os campos 
    render(<ReservaForm addReserva={() => {}} />);


    const inputNome = screen.getByPlaceholderText('Nome cliente');
    const inputQtde = screen.getByPlaceholderText('Quantidade de pessoas');

    // Simula a digitação nos campos com o fireEvent
    fireEvent.change(inputNome, { target: { name: 'nome', value: 'Carlos Silva' } });
    fireEvent.change(inputQtde, { target: { name: 'qtde', value: '4' } });

    // Verifica se os valores foram atualizados no input
    expect(inputNome.value).toBe('Carlos Silva');
    expect(inputQtde.value).toBe('4');
  });

  test('deve chamar a função addReserva com os dados corretos e limpar o formulário ao enviar', () => {
    // Cria uma função mock (simulada) para testar se foi chamada
    // A função mock serve para substituir uma função de verdade
    const mockAddReserva = jest.fn();

    render(<ReservaForm addReserva={mockAddReserva} />);

    const inputNome = screen.getByPlaceholderText('Nome cliente');
    const inputData = screen.getByPlaceholderText('Data');
    const inputHora = screen.getByPlaceholderText('Horario');
    const inputQtde = screen.getByPlaceholderText('Quantidade de pessoas');
    const botaoSubmit = screen.getByRole('button', { name: /adicionar reserva/i });

    // Preenche os campos
    fireEvent.change(inputNome, { target: { name: 'nome', value: 'Usuario teste' } });
    fireEvent.change(inputData, { target: { name: 'data', value: '2026-10-25' } });
    fireEvent.change(inputHora, { target: { name: 'hora', value: '20:00' } });
    fireEvent.change(inputQtde, { target: { name: 'qtde', value: '2' } });

    // Dispara o evento de submit do formulário
    fireEvent.click(botaoSubmit);

    expect(mockAddReserva).toHaveBeenCalledTimes(1);
    expect(mockAddReserva).toHaveBeenCalledWith({
      nome: 'Usuario teste',
      data: '2026-10-25',
      hora: '20:00',
      qtde: '2'
    });

    // 2. Verifica se os campos foram limpos após o envio
    expect(inputNome.value).toBe('');
    expect(inputData.value).toBe('');
    expect(inputHora.value).toBe('');
    expect(inputQtde.value).toBe('');
  });

});