import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useAction, getCharacters, getMessages, getTexts, getQuotas, createCharacter, createMessage, createText, createQuota } from 'wasp/client/operations';

const DashboardPage = () => {
  const { data: characters, isLoading: charactersLoading, error: charactersError } = useQuery(getCharacters);
  const { data: messages, isLoading: messagesLoading, error: messagesError } = useQuery(getMessages);
  const { data: texts, isLoading: textsLoading, error: textsError } = useQuery(getTexts);
  const { data: quotas, isLoading: quotasLoading, error: quotasError } = useQuery(getQuotas);

  const createCharacterFn = useAction(createCharacter);
  const createMessageFn = useAction(createMessage);
  const createTextFn = useAction(createText);
  const createQuotaFn = useAction(createQuota);

  if (charactersLoading || messagesLoading || textsLoading || quotasLoading) return 'Loading...';
  if (charactersError || messagesError || textsError || quotasError) return 'Error: ' + (charactersError || messagesError || textsError || quotasError);

  return (
    <div className='p-4'>
      <div>
        <h2>Characters</h2>
        {characters.map((character) => (
          <div key={character.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{character.name}</div>
            <div>{character.imagePath}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>Messages</h2>
        {messages.map((message) => (
          <div key={message.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{message.content}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>Texts</h2>
        {texts.map((text) => (
          <div key={text.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{text.content}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>Quotas</h2>
        {quotas.map((quota) => (
          <div key={quota.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{quota.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;