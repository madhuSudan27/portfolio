import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
const Skills = () => {
  return (
    <section className='py-20 align-element ' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='py-20 grid gap-16 md:grid-cols-3 lg:grid-cols-5'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;