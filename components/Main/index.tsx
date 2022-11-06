import styles from "../../styles/Main.module.css";
import Image from "next/image";
import pic from "../../public/assets/images/image-web-3-desktop.jpg";

const Main = () => {
    return (
        <>
            <div className={styles.picture}>
                <Image src={pic} alt="Picture of the author" placeholder="blur" className={styles.pic} />
            </div>
            <h1 className={styles.title}>The Bright Future of Web 3.0?</h1>
            <div className={styles.textContainer}>
                <p className={styles.text}>
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is
                    it really fulfilling its promise?
                </p>
                <button className={styles.button}>Read more</button>
            </div>
        </>
    );
};

export default Main;
