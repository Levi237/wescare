import React            from 'react';
import TextIo           from './TextIo';

const TextInfo = ({info}) => {

   const mapTitle = info.title.map((t, k) => {
        return <TextIo><h3 key={k}>{t}</h3></TextIo>
    });
    const mapBody = info.body.map((p, k) => {
        return <p key={k}>{p}</p>
    });

    return(
        <section className="page-width">
            <div>
                {mapTitle}
                <div>
                    {mapBody}
                </div>
            </div>
        </section>
    );
};

export default TextInfo;