
import Title from "./Title"
import FlatItem from "./FlatItem"
import React, { useState, useEffect } from 'react';

const FlatList = () => {
    const title = {
        text: "Property List",
        description: "Showing all results"
    }
    const [flats, setFlats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://flow-living-staging.s3.eu-west-1.amazonaws.com/public/assessment/listings.json');
        const data = await response.json();
        setFlats(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />

                <div className="row">
                    {flats.map((flat, index) => (
                        <FlatItem key={index} flat={flat} />
                    ))}
                </div>
            </div>
        </section>
    )

}

export default FlatList;