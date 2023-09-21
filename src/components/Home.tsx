import React, {useState} from 'react';
import './UI/HomeStyles.css';
import UserProfile from "./UserProfile";
import OrderNowButton from "./OrderNowButton";
import CurrentCity from "./CurrentCity";
import Logo from "./Logo";
import Slider from "./Slider";
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";
import {ReactComponent as Arrow} from "../assets/arrow1.svg";
import Header from "./Header";

const Home = () => {
    const [city, setCity] = useState('Moscow');
    const concertImages = [
        poster1,
        poster2,
        poster3,
    ];
    const concertPerformers = [
        'Kai Angel & 9mice',
    ];
    const concertNames = [
        'SECRET SHOW',
    ];
    const concertDates = [
        '28.05',
    ];
    return (
        <>
        <Header city={city} />
        <Slider
            concertDates={concertDates}
            city={city}
            concertImages={concertImages}
            concertPerformers={concertPerformers}
            concertNames={concertNames}
        />
        <section className={'tickets_place_block'}>
            <div className={'choose_performer_button'}>
                <h1>{concertPerformers}</h1>
                <Arrow
                    className={''}
                    width={70}
                    height={70}
                />
            </div>
            <div>
                <h2>Билеты</h2>
            </div>
            <div className={'tickets_buy_block'}>
                <div>
                    <button>Buy</button>
                </div>
            </div>

        </section>
            <section className={'tickets_place_block'}>
                <div className={'choose_performer_button'}>
                    <h1>{concertPerformers}</h1>
                    <Arrow
                        className={''}
                        width={70}
                        height={70}
                    />
                </div>
                <div>
                    <h2>Билеты</h2>
                </div>
                <div className={'tickets_buy_block'}>
                    <div>
                        <button>Buy</button>
                    </div>
                </div>

            </section>
            <section className={'tickets_place_block'}>
                <div className={'choose_performer_button'}>
                    <h1>{concertPerformers}</h1>
                    <Arrow
                        className={''}
                        width={70}
                        height={70}
                    />
                </div>
                <div>
                    <h2>Билеты</h2>
                </div>
                <div className={'tickets_buy_block'}>
                    <div>
                        <button>Buy</button>
                    </div>
                </div>

            </section>
        </>


    );
};

export default Home;