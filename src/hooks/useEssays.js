import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useEssays() {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    async function fetchEssays() {
      // database related works
      const db = getDatabase();
      const quizRef = ref(db, "essays");
      const quizQuery = query(quizRef, orderByKey());
      
      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        
        if (snapshot.exists()) {
          setEssays((prevEssays) => {
            return [...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchEssays();
    console.log(essays)
  }, []);

  return {
    loading,
    error,
    essays,
  };
}