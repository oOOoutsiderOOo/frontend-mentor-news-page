import styles from "../../styles/More.module.css";
import pic1 from "../../public/assets/images/image-retro-pcs.jpg";
import pic2 from "../../public/assets/images/image-top-laptops.jpg";
import pic3 from "../../public/assets/images/image-gaming-growth.jpg";
import Image from "next/image";

const More = () => {
    return (
        <>
            <div className={styles.card}>
                <Image src={pic1} alt="" className={styles.image} />
                <div className={styles.content}>
                    <div className={styles.number}>01</div>
                    <h4 className={styles.title}>Reviving Retro PCs</h4>
                    <p className={styles.text}>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image src={pic2} alt="" className={styles.image} />
                <div className={styles.content}>
                    <div className={styles.number}>02</div>
                    <h4 className={styles.title}>Top 10 Laptops of 2022</h4>
                    <p className={styles.text}>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image src={pic3} alt="" className={styles.image} />
                <div className={styles.content}>
                    <div className={styles.number}>03</div>
                    <h4 className={styles.title}>The Growth of Gaming</h4>
                    <p className={styles.text}>How the pandemic has sparked fresh opportunities.</p>
                </div>{" "}
            </div>
        </>
    );
};

export default More;
