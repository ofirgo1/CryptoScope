import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { FaSun, FaMoon } from "react-icons/fa6";

const App = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
  };
  
  return (
    <>
      <ActionIcon m='5px' variant='outline' onClick={toggleColorScheme} color={colorScheme === 'dark' ? '#dee2e6' : '#242424'}>
        <div>
          {colorScheme === 'dark' ? <FaSun /> : <FaMoon />}
        </div>
      </ActionIcon>
    </>
  )
}

export default App
