// src/events/messageCreate.event.ts
import { Message } from 'discord.js';
import { habitChannels, HabitName } from '../config/habitChannels';
import { completeHabit } from '../services/habit.service';

export const messageCreate = async (message: Message) => {
    try {
  if (message.author.bot) return; // Ignore bot messages

  const { channel, content, author } = message;

  // Determine the habit name based on the channel ID
  let habitName: HabitName | undefined;
  for (const [key, id] of Object.entries(habitChannels)) {
    if (channel.id === id) {
      habitName = key as HabitName;
      
      break;
    }
  }

  // If the message is in an unrelated channel, ignore it
  if (!habitName) return;
}catch(error){
  console.log(error);
}
  
};
