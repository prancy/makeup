import React from 'react';

const ReposGrid = ({repos}) => {
    return (
        <ul className="popular-list">
            {repos.map((repo, index) => {
                return (
                    <a href={repo.id}><li key={repo.name} className='popular-item'>
                      {repo.name}
                      {repo.price}
                      <img src={repo.image_link} />
                        {/* <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img 
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={`Avatar for ${repo.owner.login}`}
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul> */}
                    </li></a>
                )
            })
            }
        </ul>
    )
};

export default ReposGrid;