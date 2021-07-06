import React from 'react';
import { List, MarkComponent } from '~/exports';

interface JobListProps {
  language: string;
}

export const JobList: React.FC<JobListProps> = ({ language }) => {
  return language === 'English' ? (
    <List
      dataList={[
        <>
          Refactoring a large{' '}
          <MarkComponent>Scala.js/Scala-React</MarkComponent> code base
        </>,
        <>
          Developing inventory management application with{' '}
          <MarkComponent>React</MarkComponent> &{' '}
          <MarkComponent>TypeScript</MarkComponent> following the functional
          programming approach
        </>,
        <>
          Actively using state manager{' '}
          <MarkComponent>Effector.js</MarkComponent>
        </>,
        <>
          Introduced unit testing with <MarkComponent>Jest</MarkComponent> for
          product identifiers algorithms
        </>,
        <>
          Programming automated GUI tests using{' '}
          <MarkComponent>Java</MarkComponent> and{' '}
          <MarkComponent>JUnit</MarkComponent>
        </>,
        <>
          Learned fundamentals of <MarkComponent>Scala</MarkComponent> and{' '}
          <MarkComponent>SQLite</MarkComponent>
        </>,
        <>
          Using basic <MarkComponent>Shell</MarkComponent> scripting techniques
        </>,
      ]}
    />
  ) : (
    <List
      dataList={[
        <>
          Перевожу приложение Касса со <MarkComponent>Scala</MarkComponent> и{' '}
          <MarkComponent>Scala.js</MarkComponent> на современный стек React &
          TypeScript с использованием стейт-менеджера Effector
        </>,
        <>
          Внедрила unit-тестирование с помощью{' '}
          <MarkComponent>Jest</MarkComponent>
        </>,
        <>
          Пишу автоматизированные GUI-тесты на{' '}
          <MarkComponent>JUnit</MarkComponent>
        </>,
        <>
          Участвую в разработке драйверов на{' '}
          <MarkComponent>TypeScript</MarkComponent> для интеграции с фискальными
          регистраторами
        </>,
        <>
          Использую инструменты разработки: <MarkComponent>GIT</MarkComponent>,{' '}
          <MarkComponent>DevTools</MarkComponent>,{' '}
          <MarkComponent>Webpack</MarkComponent>,{' '}
          <MarkComponent>Parcel</MarkComponent>,{' '}
          <MarkComponent>Babel</MarkComponent>,{' '}
          <MarkComponent>NPM scripts</MarkComponent>
        </>,
        <>
          Получила опыт в работе со <MarkComponent>Scala</MarkComponent>,{' '}
          <MarkComponent>SQLite</MarkComponent>,{' '}
          <MarkComponent>Unix-системами</MarkComponent>, а также с трекером
          задач <MarkComponent>Jira</MarkComponent>
        </>,
      ]}
    />
  );
};
