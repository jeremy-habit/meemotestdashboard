import {PrivacyMode, useCreateTeamMutation} from '@/generated';
import React, {FC} from 'react';
import {Counter} from "@/features/counter/Counter";

export const App: FC = () => {
    /*  const { mutateAsync } = useCreateTeamMutation();
    
      const onPress = async () => {
        const { communityCreate } = await mutateAsync({
          userId: 12,
          data: { coverFileId: '', description: '', interestIds: [1, 2], name: '', privacyMode: PrivacyMode.Private },
        });
        if (communityCreate?.__typename === 'CommunityResult') {
          communityCreate.community.name;
        }
      };*/
    
    return <>
        hello cosmos
        <Counter/>
    </>;
};
