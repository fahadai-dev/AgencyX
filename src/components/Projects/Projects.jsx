import styles from './Projects.module.css';

const Projects = () => {
  const projectList = [
    { 
      id: 1, 
      title: "E-commerce Platform", 
      tech: "React & Tailwind", 
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "Agency Website", 
      tech: "React & CSS Modules", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      title: "Digital Portfolio", 
      tech: "React & Framer Motion", 
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" 
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Our Recent <span>Projects</span></h2>
      <div className={styles.grid}>
        {projectList.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={project.image} alt={project.title} className={styles.projectImg} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <button className={styles.viewBtn}>View Case Study</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;