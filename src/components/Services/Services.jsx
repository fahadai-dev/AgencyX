import styles from './Services.module.css';

const Services = () => {
  const serviceList = [
    { id: 1, title: 'Web Design', desc: 'Modern & Responsive Design' },
    { id: 2, title: 'React Dev', desc: 'Fast & Scalable web Applications' },
    { id: 3, title: 'E-commerce', desc: 'Complete online shop serviceand ' }
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>My <span>Services are</span></h2>
      <div className={styles.grid}>
        {serviceList.map(service => (
          <div key={service.id} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;