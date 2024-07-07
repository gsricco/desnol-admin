
export const  ITEMS_PER_PAGE = 3;

export type FakeDataType = {
  title: string
  number: number
  create: string
  change: string
  deadline: string
  description: string
  status: 'В работе' | 'На согласовании' | 'Закрыто' | 'Зарегистрировано' | 'Выполнено. Требует подтверждения'
  resolution: string
  service: string
  service_composition: string
  awaiting_response: boolean

}
export const fakeListData: FakeDataType[] = [
  {
    title: 'Электронная почта',
    number: 95703,
    create: '20.05.2024 15:22',
    change: '20.05.2024 17:22',
    deadline: '21.05.2024 15:22',
    description: 'Прошу сделать переадресацию на время отпуска',
    status: 'В работе',
    resolution: '',
    service: 'Интернет',
    service_composition: 'Почта',
    awaiting_response: false
  },
  {
    title: 'Установка платформы',
    number: 95707,
    create: '23.05.2024 11:22',
    change: '23.05.2024 11:23',
    deadline: '25.05.2024 15:22',
    description: 'Прошу установить платформу 8.3.24',
    status: 'Зарегистрировано',
    resolution: '',
    service: 'Поддержка рабочих мест',
    service_composition: 'Настройка ПО',
    awaiting_response: false

  },
  {
    title: 'Подключение к сети',
    number: 95708,
    create: '27.05.2024 05:22',
    change: '27.05.2024 10:22',
    deadline: '27.05.2024 15:22',
    description: 'Нужен доступ к serversoft',
    status: 'На согласовании',
    resolution: '',
    service: 'Интернет',
    service_composition: 'Доступ',
    awaiting_response: false

  },
  {
    title: 'Подключение к сети',
    number: 95709,
    create: '20.05.2024 15:22',
    change: '20.05.2024 17:22',
    deadline: '21.05.2024 15:22',
    description: 'Нужен доступ к serversoft',
    status: 'Выполнено. Требует подтверждения',
    resolution: 'Выдан доступ',
    service: 'Интернет',
    service_composition: 'Доступ',
    awaiting_response: true

  },
  {
    title: 'Установка ПО на ПК',
    number: 95710,
    create: '20.05.2024 15:22',
    change: '20.05.2024 17:22',
    deadline: '21.05.2024 15:22',
    description: 'Для нового сотрудника нужна IDE',
    status: 'Выполнено. Требует подтверждения',
    resolution: 'Софт установлен',
    service: 'Поддержка рабочих мест',
    service_composition: 'Настройка ПО',
    awaiting_response: true

  },
  {
    title: 'Установка проектора',
    number: 95723,
    create: '25.05.2024 15:22',
    change: '25.05.2024 17:22',
    deadline: '26.05.2024 15:22',
    description: 'В ауд. 312',
    status: 'Закрыто',
    resolution: 'Проектор установлен',
    service: 'Поддержка рабочих мест',
    service_composition: 'Настройка оборудования',
    awaiting_response: false

  },
{
    title: 'Проблема с сетью',
    number: 95732,
    create: '20.05.2024 15:22',
    change: '20.05.2024 17:22',
    deadline: '21.05.2024 15:22',
    description: 'Не заходит на внешние сайты при включенном впн',
    status: 'Зарегистрировано',
    resolution: '',
    service: 'Интернет',
    service_composition: 'Доступ',
    awaiting_response: false

  },
  {
    title: 'Активация Office',
    number: 95738,
    create: '20.06.2024 15:22',
    change: '20.06.2024 17:22',
    deadline: '21.06.2024 15:22',
    description: 'Требуется офис на выездном ноутбуке',
    status: 'На согласовании',
    resolution: 'Активирован 2016',
    service: 'Поддержка рабочих мест',
    service_composition: 'Настройка ПО',
    awaiting_response: true

  },
  {
    title: 'Замена картриджа',
    number: 95723,
    create: '25.05.2024 15:22',
    change: '25.05.2024 17:22',
    deadline: '26.05.2024 15:22',
    description: 'В каб. 111',
    status: 'В работе',
    resolution: '',
    service: 'Поддержка рабочих мест',
    service_composition: 'Настройка оборудования',
    awaiting_response: false

  },
  {
    title: 'Доставка холодного пива',
    number: 1000723,
    create: '05.07.2024 15:22',
    change: '05.07.2024 15:25',
    deadline: '05.07.2024 15:30',
    description: 'Пункт охраны',
    status: 'В работе',
    resolution: 'Требует охлаждения - ждем',
    service: 'Поддержка рабочих мест',
    service_composition: 'Доставка оборудования',
    awaiting_response: true

  },
]