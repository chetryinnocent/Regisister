// import { testimonials } from "../constants";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
        <div className="flex">
            <div className="bg-neutral-900 rounded-md p-6 m-2 text-md border border-neutral-800 font-thin w-[60vh] h-[15rem]">
            <p className="opacity-60">សកលវិទ្យាល័យប៊ែលធីជាទីកន្លែងដែលមានភាពលេចធ្លោដោយសារតែការបង្រៀនដែលមានគុណភាពខ្ពស់ និងការបង្កើតបរិយាកាសសិក្សាដែលអាចជួយឱ្យនិស្សិតអភិវឌ្ឍសមត្ថភាពរបស់ខ្លួនបានយ៉ាងច្បាស់លាស់ ។</p>
          <div className="flex items-center mt-4">
          <img className="w-12 h-12 mr-3 rounded-full border border-neutral-300" src={user1} alt="" />
            <h3>Ry Chet</h3>
          </div>
          </div>

            <div className="bg-neutral-900 rounded-md p-6 m-2 text-md border border-neutral-800 font-thin w-[60vh] h-[16rem]">
            <p className="opacity-60">សាលាបានផ្តល់ឱកាសដល់ខ្ញុំក្នុងការស្វែងយល់ និងអភិវឌ្ឍជំនាញថ្មីៗ ដែលមានប្រយោជន៍ដល់ការប្រកួតប្រជែងក្នុងសង្គមអនាគត ។ខ្ញុំសូមអរគុណចំពោះសាលាដែលបានផ្តល់សេវាកម្មអប់រំដែលមានតម្លៃ និងបានជួយសន្សំសំចៃពេលវេលារបស់ខ្ញុំសម្រាប់ការសិក្សាដែលមានប្រសិទ្ធភាព ។</p>
            <div className="flex items-center mt-4">
            <img className="w-12 h-12 mr-3 rounded-full border border-neutral-300" src={user2} alt="" />
            <h3>Sa Roth</h3>
              </div>
              </div>
              
            <div className="bg-neutral-900 rounded-md p-6 m-2 text-md border border-neutral-800 font-thin w-[60vh]">
            <p className="opacity-60">សាលាបានបង្ហាញឱ្យឃើញពីភាពសម្រេចជោគជ័យនៃការអប់រំជាមួយនិស្សិតជាច្រើនដែលបានទទួលការងារដ៏ល្អឥតខ្ចោះ និងមានសមត្ថភាពប្រកួតប្រជែងក្នុងទីផ្សារការងារ។ខ្ញុំពិតជាសរសើរពីការផ្តល់តម្លៃដល់ការបង្រៀន ដែលមានគោលបំណងធ្វើឱ្យនិស្សិតមានទំនុកចិត្ត និងត្រៀមខ្លួនបានល្អសម្រាប់ជីវិតពិតបន្ទាប់ពីបញ្ចប់ការសិក្សា ​។</p>
            <div className="flex items-center mt-4">
            <img className="w-12 h-12 mr-3 rounded-full border border-neutral-300" src={user3} alt="" />
            <h3>Som Nang</h3>
              </div>
              </div>
        </div>
        
        <div className="flex">
            <div className="bg-neutral-900 rounded-md p-6 m-2 text-md border border-neutral-800 font-thin w-[60vh] h-[13rem]">
            <p className="opacity-60">I really appreciate the value of teaching that aims to make students confident and well-prepared for real life after graduation.</p>
          <div className="flex items-center mt-4">
          <img className="w-12 h-12 mr-3 rounded-full border border-neutral-300" src={user4} alt="" />
            <h3>Ronee Brown</h3>
          </div>
          </div>

            <div className="bg-neutral-900 rounded-md p-6 m-2 text-md border border-neutral-800 font-thin w-[60vh] h-[13rem]">
            <p className="opacity-60">The school not only teaches academic knowledge, but also shares views and morals that are important crops in society.</p>
            <div className="flex items-center mt-4">
            <img className="w-12 h-12 mr-3 rounded-full border border-neutral-300" src={user5} alt="" />
            <h3>Michael Wilson</h3>
              </div>
              </div>
              
            <div className="bg-neutral-900 rounded-md p-6 m-2 text-md border border-neutral-800 font-thin w-[60vh]">
            <p className="opacity-60">Living in a school environment showed me the simplicity of studying and collaborating with friends.The school has given me the opportunity to explore and develop new skills that will be useful for future social competition.</p>
            <div className="flex items-center mt-4">
            <img className="w-12 h-12 mr-3 rounded-full border border-neutral-300" src={user6} alt="" />
            <h3>Emily Davis</h3>
              </div>
              </div>
        </div>
    
    </div>
  );
};

export default Testimonials;