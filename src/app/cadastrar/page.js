'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div>
             <div>
                <img style={{
                    marginLeft: 607,
                    marginTop: 30}} 
                src='https://i.pinimg.com/236x/af/60/59/af60590576fe0c6e1b7f0a9c71914d3b.jpg'/>
            </div>
            <form action='' onSubmit={cadastrar}>
              
                <h1 style={{
                     width:50,
                     marginLeft:680,
                     fontWeight: 'bold',
                     marginTop: 10}}>

                    Cadastrar
                </h1>
                
                <input style={{backgroundColor: 'transparent',
                 width: 250,
                 marginLeft:600, 
                 borderWidth: 1, 
                 textAlign: 'center',
                 marginTop: 8, 
                 borderRadius: 10}} 
                  placeholder='INFORME O NOME DO ALUNO' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input><br/>

                <input style={{backgroundColor:'transparent',
                 width: 250,
                 marginLeft:600,
                 borderWidth: 1, 
                 textAlign: 'center',
                 marginTop: 8, 
                 borderRadius: 10}} 
                  placeholder='INFORME O CURSO' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input><br/>

                <input style={{backgroundColor:'transparent',
                 width: 250,
                 marginLeft:600,
                 borderWidth: 1,
                 textAlign: 'center',
                 marginTop: 8,
                 borderRadius: 10}}
                  placeholder='INFORME Nº DE INSCRIÇÃO' nome="num_inscricao" type="number"
                    onChange={e => setNum_inscricao(e.target.value)}></input><br/>
                
                <button style={{backgroundColor: 'purple',
                   transitionDuration: 0.4,
                   borderWidth: 1,
                   textAlign: 'center',
                   padding: 10,
                   margin: 10,
                   borderRadius: 10,
                   borderColor:'3A136C',
                   marginLeft:600}}
     type='submit'>CADASTRAR</button>
                
                <a style={{
                    backgroundColor: 'purple',
                    transitionDuration: 0.4,
                    borderWidth: 1,
                    textAlign: 'center',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                    borderColor:'3A136C',
                    marginLeft:20}}
                     href='/'>Voltar</a>
           
            </form>
           
        </div>

    );

}