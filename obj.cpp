#include <stdio.h>
int main()
{
  int a[20], n, i, d, sum = 0, c = 0, c1 = 0;
  printf("enter num..");
  scanf("%d", &n);
  for (i = 0; i < n; i++)
  {
    scanf("%d", &a[i]);
  }
  for (i = 0; i < n; i++)
  {
    while (a[i] > 0)
    {
      d = a[i] % 10;
      c++;
      a[i] = a[i] / 10;
    }
    if (c % 2 == 0)
    {
      c1++;
      c = 0;
    }
    else
    {
      c = 0;
    }
  }

  printf("%d", c1);

  return 0;
}