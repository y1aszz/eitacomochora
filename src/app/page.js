"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main>

      
      
      {alunos.map(aluno => (
        <div style={{ marginTop:20}} key={aluno.id}>
          <p>{aluno.nome}</p>
          <p>{aluno.curso}</p>
          
          <Link
      style={{
      backgroundColor: 'purple',
      transitionDuration: 0.4,
      borderWidth: 1,
      textAlign: 'center',
      padding: 10,
      margin: 10,
      borderRadius: 10,
      borderColor:'3A136C',
  }}
       href="/cadastrar">CADASTRAR</Link>

          <button style={{

      backgroundColor: 'purple',
      transitionDuration: 0.4,
      borderWidth: 1,
      textAlign: 'center',
      padding: 10,
      margin: 10,
      borderRadius: 10,
      borderColor:'3A136C',
      }}
      
      onClick={e => e.preventDefault(remover(aluno.id))}>REMOVER</button>
        </div>
      ))}
    </main>
  )
}
