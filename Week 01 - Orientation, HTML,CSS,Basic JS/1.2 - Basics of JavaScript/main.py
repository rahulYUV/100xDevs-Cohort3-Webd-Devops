from scipy.stats import norm
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-4, 4, 1000)  # X-axis values
y = norm.pdf(x, 0, 1)         # Normal PDF with mean=0, std=1

plt.plot(x, y)
plt.title('PDF Example (Normal Distribution)')
plt.xlabel('Value')
plt.ylabel('Probability Density')
plt.grid(True)
plt.show()
