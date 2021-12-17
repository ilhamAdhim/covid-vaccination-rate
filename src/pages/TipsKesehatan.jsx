import React from 'react'; 
import { Divider } from 'antd';
import HeaderTips from '../components/HeaderTips';
import HygieneCardList from '../components/HygieneCardList';
import HealthCardList from '../components/HealthCardList';
import VaccineTipsCardList from '../components/VaccineTipsCardList';
import Footer from '../components/Footer';
import '../styles/style.css';

const TipsKesehatan = () => {

    return (
        <>
            <div >
                <HeaderTips />
                <Divider className="colored-divider"> Protokol Kesehatan </Divider>

                <HealthCardList />

                <Divider className="colored-divider"> Presiapan Sebelum Suntik Vaksin COVID-19</Divider>

                <VaccineTipsCardList dataSource={[1, 2, 3]} />

                <Divider className="colored-divider"> Mempraktikkan Kebersihan Pernapasan</Divider>

                <HygieneCardList dataSource={[1, 2, 3]} />

            </div>
            <Footer />
        </>
    );
};

export default TipsKesehatan;