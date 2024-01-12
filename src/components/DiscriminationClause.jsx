
import React            from 'react';
import styled           from 'styled-components';

const DiscriminationClause = () => {

    return(
        <Wrapper >
            <div>
                <section>
                    <h3>JOINT COMMISSION</h3>
                    <h3>INTERNATIONAL</h3>
                    <h3>QUALITY APPROVAL</h3>
                </section>
                <section>
                    <img src="JCIQA.png" alt="Joint Commission International Quality Approval"/>
                </section>
            </div>
        </Wrapper>

    );
};

const Wrapper = styled.div`
    > div {
        max-width: 282px;
        display: flex;
    }
    h3 {
        font-size: 1.1rem;
        margin: 0!important;
    }
    img {
        --size: 80px;
        height: var(--size);
        width: var(--size);
    }
`;

export default DiscriminationClause;