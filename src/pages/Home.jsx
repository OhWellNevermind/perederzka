import Container from "../components/Container/Container";
import { IoIosArrowDown } from "react-icons/io";
import Faq from "react-faq-component";

import { SearchForm } from "../components/Home/SearchForm/SearchForm";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <h1 className="text-center text-[24px] font-semibold pt-[10px] mb-[30px] whitespace-pre-wrap max-w-[300px] md:max-w-[515px] lg:max-w-[1280px] lg:text-[44px] md:mb-10">
          Допоможемо вам
          <span className="text-main"> знайти ідеальне місце </span>
          для ваших домашніх улюбленців
        </h1>
        <SearchForm />
        <section
          id="faqs"
          className="pt-[40px] lg:pt-[80px] pb-[50px] w-full max-w-[800px] lg:max-w-none flex flex-col items-center"
        >
          <h2 className="font-semibold text-lg lg:text-[32px] text-center mb-[20px] lg:mb-[46px]">
            Поширені запитання
          </h2>
          <div id="faq" className="lg:flex lg:gap-[83px] w-full lg:w-auto">
            <Faq
              data={{
                rows: [
                  {
                    title:
                      "Як визначити, що місце перетримки надійне і безпечне для тварини?",
                    content:
                      "Ми рекомендуємо звертати увагу на рейтинг та відгуки інших користувачів, які вже користувалися послугами передетримки нашого сайту. Також слід зв'язатися з тим, хто надає послугу перетримки, поставити всі необхідні питання та впевнитися, що умови відповідають потребам вашої тварини.",
                  },
                  {
                    title: "Що робити, якщо з моєю твариною щось сталося?",
                    content:
                      "Памʼятайте, що наш сайт лише допомогає вам знайти тих, хто готовий взяти тварин на перетримку. Якщо з вашою твариною на перетримці щось сталося, сайт та його власники за це <span class='font-semibold leading-[1.4]'>відповідальності не несуть</span>. Ви можете відправити скаргу на профіль того, хто нашкодив вашій тварині, щоб ми могли видалити його обліковий запис з сайту.",
                  },
                  {
                    title: "Як визначити ціну перетримки для моєї тварини?",
                    content:
                      "Зазвичай ціна перетримки за добу вказується у профілі догсітера, але щоб дізнатися більше ви можети звʼязатися з ним і обговорити всі умови перетримки, і спитати про вартість послуги. Ціна перетримки може відрізнятися в залежності від типу тварини, тривалості перетримки і умов. ",
                  },
                  {
                    title:
                      "Як я можу знати, що моя тварина буде оточена дбайливістю і увагою на місці перетримки?",
                    content:
                      "Ми рекомендуємо переглянути профілі і відгуки інших користувачів щодо місць перетримка, а також зустрітися з тим, хто надає послугу перетримки особисто, перед тим як довірити йому вашу тварину. Це допоможе вам впевнитися в якості умов і уваги, яку отримає ваш пухнастий друг.",
                  },
                  {
                    title:
                      "Як зв'язатися з власником місця перетримки для подальшої деталізації?",
                    content:
                      "На сторінці кожного оголошення мають бути вказані контакти(номер телефона, пошта), через які ви можете звʼязатися з людиною, яка надає послуги перетримки.",
                  },
                  {
                    title: "Як стати догсітером?",
                    content: (
                      <div>
                        Щоб стати догсітером на нашому сайті, потрібно лише{" "}
                        <Link to="/auth/register/type/dogSitter">
                          <span className="underline text-main font-semibold">
                            зареєструватися як догсітер
                          </span>
                        </Link>
                        , внести всі необхідні дані та опублікувати ваше
                        оголошення.
                      </div>
                    ),
                  },
                ],
              }}
              config={{
                arrowIcon: (
                  <IoIosArrowDown size={32} className="!fill-[#808080]" />
                ),
              }}
            />
            <img
              src="/src/images/dog_question1.png"
              alt=""
              className="hidden lg:block max-h-[531px]"
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
