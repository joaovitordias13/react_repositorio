import { useEffect, useState } from "react"

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/joaovitordias13/repos")
        .then(res => res.json())
        .then(resJson => {
           setRepos(resJson)
        })
    },[]);

    return  (
    <ul>
        {repos.map(repositorio => {
            <li key={repositorio.id}>
                <b>Nome:</b> {repositorio.name}
                <b>Linguagem:</b> {repositorio.language}
                <a target="_blank" href={repositorio.html_url}>Visitar no github</a>
            </li>
        })}
         <li>Repositorio</li> 
    </ul>
    )    
}

export default ReposList