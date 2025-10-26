import { useState, useEffect } from "react";


const Base_url = 'https://api.github.com/users/Deborah-teta';

export default function useGithub () {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProfile = async ()=>{
            setLoading(true);
            setError(null);
            try{
                const response = await fetch('${Base_url}');
                const json = await response.json();

                const profile = {
                   login: json.login,
                   id: json.id,
                   node_id: json.node_id,
                   avatar_url: json.avatar_url,
                   html_url: json.html_url,
                   name: json.name,
                   company: json.company,
                   blog: json.blog,
                   location: json.location,
                   email: json.email,
                   hireable: json.hireable,
                   bio: json.bio,
                   twitter_username: json.twitter_username,
                   public_repos: json.public_repos,
                   public_gists: json.public_gists,
                   followers: json.followers,
                   following: json.following,
                   created_at: json.created_at,
                   updated_at: json.updated_at,
                };
                setData(profile);
                
                }catch (err) {
                    setError((err).message);
                } finally {
                    setLoading(false);
                }
        };

    fetchProfile();
  }, []);

  return { data, loading, error };
};

        
