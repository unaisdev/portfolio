/**
 * Creates a debounced version of a function that allows controlling the frequency at which it is executed.
 * @param func The function to be executed after a period of inactivity.
 * @param delay The waiting time in milliseconds before executing the function.
 * @returns A debounced function that wraps the original function.
 */

 type DebouncedFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

 export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): DebouncedFunction<T> {
    // Variable to store the timer ID
    let timeoutId: NodeJS.Timeout;
  
    return function (...args: Parameters<T>): void {
        // @ts-ignore
      const context = this;
  
      // Clear the previous timer
      clearTimeout(timeoutId);
  
      // Start a new timer to execute the function after the waiting period
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }