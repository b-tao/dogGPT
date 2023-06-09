import './IntroCard.css';
import dog_image from './dog.jpg'

export default function IntroCard({handleEnterKeyPress}) {
    const message1 = "When can I go on a walk?"
    const message2 = "Why are treats so delicious?"
    const message3 = "Woof?"
    return (
        <div className='card'>
            <div className="title">
                DogGPT
            </div>
            <div className="rest-container">
                <div className='column'>
                    <img className="enterimage" src={dog_image} alt="enter icon" />
                    <p className='subtitle'>Examples</p>
                    <p className='examplestext exhover' onClick={()=>handleEnterKeyPress(message1)}>"When can I go on a walk?"→</p>
                    <p className='examplestext exhover'onClick={()=>handleEnterKeyPress(message2)}>"Why are treats so delicious?"→</p>
                    <p className='examplestext exhover'onClick={()=>handleEnterKeyPress(message3)}>"Woof?"→</p>
                </div>
                <div className='column'>
                    <img className="enterimage" src={dog_image} alt="enter icon" />
                    <p className='subtitle'>Capabilities</p>
                    <p className='examplestext'>Expert at fetching toys thrown by Humans</p>
                    <p className='examplestext'>Eager to play and go outside all the time</p>
                    <p className='examplestext'>Woof!</p>
                </div>                <div className='column'>
                <img className="enterimage" src={dog_image} alt="enter icon" />
                    <p className='subtitle'>Limitations</p>
                    <p className='examplestext'>Only speaks Dog Langauge (for now)</p>
                    <p className='examplestext'>Can not understand why a Human would want a Cat</p>
                    <p className='examplestext'>Meow?</p>
                </div>
            </div>
        </div>
    )
}